"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiDownload, FiShare2 } from "react-icons/fi";
import Resume from "./Resume";
import { useTranslations } from "next-intl";
import { generatePDF } from "react-to-pdf";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const t = useTranslations("resume");
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return;
    
    setIsGenerating(true);
    
    try {
      await generatePDF(resumeRef, {
        filename: 'resume.pdf',
        page: {
          format: 'A4',
          orientation: 'portrait',
          margin: {
            top: '10mm',
            right: '10mm',
            bottom: '10mm',
            left: '10mm',
          },
        },
        overrides: {
          pdf: {
            compress: true,
          },
          canvas: {
            useCORS: true,
            scale: 2, // Better quality
          },
        },
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white dark:bg-slate-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-xl font-bold">{t("title")}</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadPDF}
                  disabled={isGenerating}
                  className="btn-primary py-1 px-3 text-sm flex items-center gap-1"
                >
                  {isGenerating ? (
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <FiDownload size={16} />
                  )}
                  {isGenerating ? t("generating") : t("download")}
                </button>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  aria-label="Close"
                >
                  <FiX size={24} />
                </button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-4 flex justify-center">
              <div className="shadow-lg" ref={resumeRef}>
                <Resume />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 