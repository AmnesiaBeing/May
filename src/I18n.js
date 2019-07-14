import I18n from 'react-native-i18n'
import en from '../lang/en'
import zh from '../lang/zh'

I18n.fallbacks = true;

I18n.translations = {
    en,
    zh,
};

export default I18n;