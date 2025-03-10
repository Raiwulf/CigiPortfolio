"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX, FiGlobe } from "react-icons/fi";

export default function Navbar() {
  const t = useTranslations("navigation");
  const themeT = useTranslations("theme");
  const langT = useTranslations("language");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  // Menu items
  const menuItems = [
    { href: "/", label: t("home") },
    { href: "/#about", label: t("about") },
    { href: "/#projects", label: t("projects") },
    { href: "/#skills", label: t("skills") },
    { href: "/#contact", label: t("contact") },
  ];

  // Languages
  const languages = [
    { code: "en", label: langT("en") },
    { code: "es", label: langT("es") },
    { code: "fr", label: langT("fr") },
  ];

  // Ensure theme is only applied after mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLangMenu = () => setShowLangMenu(!showLangMenu);

  const changeLanguage = (lang: string) => {
    // Extract the path without the locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    const newPath = `/${lang}${pathWithoutLocale || '/'}`;
    router.push(newPath);
    setShowLangMenu(false);
  };

  if (!mounted) return null;

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-50 py-4 transition-all duration-300">
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary-light dark:text-primary-dark">
          JD
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Theme and Language Controls */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <FiSun className="w-5 h-5" />
            ) : (
              <FiMoon className="w-5 h-5" />
            )}
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={toggleLangMenu}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center"
              aria-label="Change language"
            >
              <FiGlobe className="w-5 h-5 mr-1" />
              <span className="text-sm uppercase">{locale}</span>
            </button>

            <AnimatePresence>
              {showLangMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        locale === lang.code
                          ? "bg-gray-100 dark:bg-gray-700 text-primary-light dark:text-primary-dark"
                          : "hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <FiSun className="w-5 h-5" />
            ) : (
              <FiMoon className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-background-dark"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors py-2"
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Language Selector in Mobile Menu */}
              <div className="py-2">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {langT("en")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`px-3 py-1 text-sm rounded-md ${
                        locale === lang.code
                          ? "bg-primary-light dark:bg-primary-dark text-white"
                          : "bg-gray-100 dark:bg-gray-800"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 