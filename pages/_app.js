import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js';

import '../styles/plugins.css'
import '../styles/style.css'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default appWithTranslation(MyApp, nextI18NextConfig);