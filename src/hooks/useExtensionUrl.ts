import { useState, useEffect } from 'react';

export const CHROME_EXTENSION_URL = 'https://chromewebstore.google.com/detail/hitmeup-for-github/kceaihfcmciaaaodlanhkfkahjggncpo';
export const FIREFOX_EXTENSION_URL = 'https://addons.mozilla.org/en-US/firefox/addon/hitmeup-for-github/';

export function useExtensionUrl() {
  const [url, setUrl] = useState(CHROME_EXTENSION_URL);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const userAgent = window.navigator.userAgent.toLowerCase();
    
    // Detect Firefox (Mozilla-based)
    const isFirefox = userAgent.includes('firefox') || userAgent.includes('gecko/');
    const isChromium = userAgent.includes('chrome') || userAgent.includes('chromium');

    if (isFirefox && !isChromium) {
      setUrl(FIREFOX_EXTENSION_URL);
    } else {
      setUrl(CHROME_EXTENSION_URL);
    }
  }, []);

  return url;
}
