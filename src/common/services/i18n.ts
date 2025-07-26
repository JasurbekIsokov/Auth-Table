import i18next from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

interface IProps {
  languages: string[];
  currentLanguage: string;
  initialLanguage: string;
  onChange: (language: string) => void;
  debug?: boolean;
}

export const init = ({ languages, currentLanguage, initialLanguage, onChange, debug }: IProps) => {
  i18next.on('languageChanged', language => onChange(language));

  i18next
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) => import(`../../translations/${language}/${namespace}.json`)
      )
    )
    .init({
      lowerCaseLng: true,
      lng: languages.find(l => l === currentLanguage),
      fallbackLng: initialLanguage,
      debug,
      supportedLngs: languages,
      interpolation: {
        escapeValue: false
      },
      ns: ['common'],
      defaultNS: 'common',
      keySeparator: false
    });
};

export const instance = i18next;
