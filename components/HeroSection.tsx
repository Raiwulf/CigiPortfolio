"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import Link from "next/link";

export default function HeroSection() {
  const t = useTranslations("hero");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container-custom">
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <motion.p
              className="text-primary-light dark:text-primary-dark text-xl mb-2"
              variants={itemVariants}
            >
              {t("greeting")}
            </motion.p>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4"
              variants={itemVariants}
            >
              {t("name")}
            </motion.h1>
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
              variants={itemVariants}
            >
              {t("title")}
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
              variants={itemVariants}
            >
              {t("description")}
            </motion.p>
            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
              <Link href="#projects" className="btn-primary flex items-center gap-2">
                {t("cta")} <FiArrowRight />
              </Link>
              <div className="flex items-center gap-4 ml-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  aria-label="Twitter"
                >
                  <FiTwitter className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            className="order-1 md:order-2 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark rounded-full opacity-20 blur-xl"></div>
              <div className="absolute inset-4 bg-white dark:bg-background-dark rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://placehold.co/400x400/4F46E5/FFFFFF?text=JD"
                  alt="John Doe"
                  className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 