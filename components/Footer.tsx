"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from "react-icons/fi";

export default function Footer() {
  const t = useTranslations("footer");
  const navT = useTranslations("navigation");

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-slate-900 py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-primary-light dark:text-primary-dark">
              JD
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Full Stack Developer specializing in modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                >
                  {navT("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                >
                  {navT("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                >
                  {navT("projects")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                >
                  {navT("skills")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                >
                  {navT("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                San Francisco, CA
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                hello@johndoe.com
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                +1 (555) 123-4567
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
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
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            {t("copyright").replace("2023", currentYear.toString())}
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mt-2 flex items-center justify-center">
            {t("madeWith")} <FiHeart className="mx-1 text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
} 