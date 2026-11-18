
import { useState } from "react";

function LanguageSwitcher() {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("ikirere-language") || "en"
  );

  function changeLanguage(event) {
    const selectedLanguage = event.target.value;

    setLanguage(selectedLanguage);
    localStorage.setItem("ikirere-language", selectedLanguage);

    window.dispatchEvent(
      new CustomEvent("language-change", {
        detail: selectedLanguage
      })
    );
  }

  return (
    <select
      className="language-switcher"
      value={language}
      onChange={changeLanguage}
      aria-label="Select language"
    >
      <option value="en">English</option>
      <option value="rw">Kinyarwanda</option>
    </select>
  );
}

export default LanguageSwitcher;
