import 'dayjs/locale/uz-latn';
import 'dayjs/locale/ru';

import dayjs from 'dayjs';

import config from '@/config';

import { i18n, storage } from '@/common/services';

i18n.init({
  languages: config.language.list,
  currentLanguage: storage.local.get(config.language.key),
  initialLanguage: config.language.initial,
  onChange: language => {
    storage.local.set('language', language);
    dayjs.locale(language === 'uz' ? 'uz-latn' : language);
  },
  debug: import.meta.env.DEV
});

// for triggering the re-deployment 4
