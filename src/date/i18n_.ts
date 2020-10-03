import mixIn from '../object/mixIn';
import enUS from './i18n/en-US';

// we also use mixIn to make sure we don't affect the original locale
const activeLocale = mixIn({}, enUS, {
    // we expose a "set" method to allow overriding the global locale
    set: function(localeData) {
        mixIn(activeLocale, localeData);
    }
});

export default activeLocale;
