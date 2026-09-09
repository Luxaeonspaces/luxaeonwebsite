"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  // { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portal", label: "Portal" },
  { href: "/journal", label: "Journals" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav-container flex-between">
        <Link
          href="/"
          className="header_logo"
          onClick={() => setOpen(false)}
          aria-label="Luxaeon spaces home"
        >
          <Image
            src={"/logo2.png"}
            alt="Luxaeon Spaces"
            width={500}
            height={400}
            loading="eager"
          />
        </Link>

        <div className="header__nav-group">
          <nav className="header__nav" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="header__link">
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="header__cta">
            Get in Touch
          </Link>
        </div>

        <button
          className="header__toggle"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-label="Open menu"
        >
          <span />
          <span />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              className="header__mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="header__mobile-bar flex-between">
                <motion.span
                  className="header_logo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link href="/" onClick={() => setOpen(false)}>
                    <Image
                      src={"/logo2.png"}
                      alt="Luxaeon Spaces"
                      width={500}
                      height={400}
                      loading="eager"
                    />
                  </Link>
                </motion.span>

                <motion.button
                  className="header__toggle header__toggle--close"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <span />
                  <span />
                </motion.button>
              </div>

              <nav className="header__mobile-nav" aria-label="Mobile">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className="header__mobile-link"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + NAV_LINKS.length * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href="/contact"
                    className="header__mobile-link header__mobile-link--cta"
                    onClick={() => setOpen(false)}
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Navbar;
