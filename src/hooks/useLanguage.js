
import { useEffect, useState } from "react";
import { translations } from "../data/translations";

export function useLanguage() {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("ikirere-language") || "en"
  );

  useEffect(() => {
    function handleLanguageChange(event) {
      setLanguage(event.detail);
    }

    window.addEventListener("language-change", handleLanguageChange);

    return () => {
      window.removeEventListener("language-change", handleLanguageChange);
    };
  }, []);

  function changeLanguage(newLanguage) {
    setLanguage(newLanguage);
    localStorage.setItem("ikirere-language", newLanguage);
  }

  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return {
    language,
    changeLanguage,
    t
  };
}

export default useLanguage;
