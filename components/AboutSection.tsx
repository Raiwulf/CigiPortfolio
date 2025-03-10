"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FiDownload, FiFileText } from "react-icons/fi";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import ResumeModal from "./ResumeModal";

export default function AboutSection() {
  const t = useTranslations("about");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const openResumeModal = () => setIsResumeModalOpen(true);
  const closeResumeModal = () => setIsResumeModalOpen(false);

  return (
    <section id="about" className="section bg-gray-50 dark:bg-slate-900">
      <div className="container-custom">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          {t("title")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-80 md:h-96 overflow-hidden rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-light/20 to-accent-light/20 dark:from-primary-dark/20 dark:to-accent-dark/20 z-10"></div>
              <img
                src="https://placehold.co/600x800/4F46E5/FFFFFF?text=About+Me"
                alt="About Me"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-light dark:bg-primary-dark rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-white text-4xl font-bold">5+</span>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg mb-6 leading-relaxed">
              {t("bio")}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm flex-1 min-w-[120px] text-center">
                <h3 className="text-xl font-bold text-primary-light dark:text-primary-dark">50+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Projects</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm flex-1 min-w-[120px] text-center">
                <h3 className="text-xl font-bold text-primary-light dark:text-primary-dark">30+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Clients</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm flex-1 min-w-[120px] text-center">
                <h3 className="text-xl font-bold text-primary-light dark:text-primary-dark">5+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Years</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                className="btn-outline flex items-center gap-2 w-fit"
                download
              >
                <FiDownload /> {t("downloadResume")}
              </a>
              <button
                onClick={openResumeModal}
                className="btn-primary flex items-center gap-2"
              >
                <FiFileText /> {t("shareAsPdf")}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={closeResumeModal} />
    </section>
  );
} 