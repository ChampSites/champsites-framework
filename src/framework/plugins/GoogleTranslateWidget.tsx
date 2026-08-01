"use client";

import { useEffect } from "react";
import Script from "next/script";

export function GoogleTranslateWidget({ isDark, scrolled }: { isDark?: boolean, scrolled?: boolean }) {
  // Hide the default Google Translate top banner
  useEffect(() => {
    const addStyles = () => {
      const style = document.createElement("style");
      style.innerHTML = `
        /* Hide Google Translate top banner */
        .goog-te-banner-frame.skiptranslate { display: none !important; }
        body { top: 0px !important; }
        
        /* Hide the "Powered by Google Translate" text and logo */
        .goog-logo-link, .goog-te-gadget img { display:none !important; }
        .goog-te-gadget { 
          color: transparent !important; 
          font-size: 0px !important; /* Hides text nodes */
          display: flex;
          align-items: center;
        }
        
        /* Ensure the span containing the select is visible */
        .goog-te-gadget > span {
          display: inline-block !important;
        }
        
        /* Hide the last span which contains the 'Powered by' text if it's separate */
        .goog-te-gadget > span > a {
          display: none !important;
        }
        
        /* Style the actual select element to match the navbar */
        .goog-te-combo {
          background-color: transparent;
          border: 1px solid currentColor;
          border-radius: 0.375rem;
          padding: 0.375rem 0.75rem;
          font-size: 0.875rem !important;
          cursor: pointer;
          outline: none;
        }
        
        .text-white .goog-te-combo {
          color: white !important;
        }
        .text-gray-700 .goog-te-combo {
          color: #374151 !important;
        }

        .goog-te-combo option {
          color: black !important;
        }
      `;
      document.head.appendChild(style);
    };
    addStyles();
  }, []);

  const textClass = scrolled ? "text-gray-700" : isDark ? "text-white" : "text-gray-700";

  return (
    <>
      <div id="google_translate_element" className={`relative z-50 ${textClass}`}></div>
      
      <Script
        id="google-translate-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,hi,ta,te,mr,bn,gu,kn,ml,pa', // Major Indian languages + English
                autoDisplay: false
              }, 'google_translate_element');
            }
          `,
        }}
      />
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}
