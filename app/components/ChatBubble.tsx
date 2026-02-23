"use client";

import React, { useEffect, useState } from "react";
import styles from "./ChatBubble.module.css";

const ChatBubble = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".scroll-section");
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      sections.forEach((section, index) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        // Check if we're in this section (with some tolerance)
        if (
          scrollPosition >= sectionTop - windowHeight / 2 &&
          scrollPosition < sectionTop + sectionHeight - windowHeight / 2
        ) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only show on cover page (section 0) and last page (section 4)
  const shouldShow = activeSection === 0 || activeSection === 4;
  const isCoverPage = activeSection === 0;
  const isLastPage = activeSection === 4;

  if (!shouldShow) {
    return null;
  }

  return (
    <a 
      href="https://calendly.com/philipblecher/30min" 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${styles.bubbleWrapper} ${
        isCoverPage ? styles.coverPage : styles.lastPage
      }`}
    >
      <div className={styles.bubble}>
        Chat to me!
        <div className={styles.tail} />
      </div>
    </a>
  );
};

export default ChatBubble;