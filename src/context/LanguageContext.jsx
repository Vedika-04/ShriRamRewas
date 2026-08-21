import { createContext, useContext, useEffect, useState } from "react";

import { headerTranslations } from "../translations/header";
import { heroTranslations } from "../translations/hero";
import { categoryTranslations } from "../translations/category";
import { footerTranslations } from "../translations/footer";

const LanguageContext = createContext();

const translations = {
  header: headerTranslations,
  hero: heroTranslations,
  category: categoryTranslations,
  footer: footerTranslations,
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "hi";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key) => {
    const [section, textKey] = key.split(".");

    const sectionTranslations = translations[section];

    if (!sectionTranslations) {
      return key;
    }

    return (
      sectionTranslations?.[language]?.[textKey] ||
      sectionTranslations?.en?.[textKey] ||
      key
    );
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);