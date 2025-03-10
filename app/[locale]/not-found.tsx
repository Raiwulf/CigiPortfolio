"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark p-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary-light dark:text-primary-dark">404</h1>
          <h2 className="text-3xl font-semibold mt-4 mb-6">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link
            href="/"
            className="btn-primary inline-flex items-center gap-2"
          >
            <FiArrowLeft /> Go Back Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 