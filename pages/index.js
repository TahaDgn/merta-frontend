import Head from 'next/head';

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


import AboutUs from '../components/about';
import Contact from '../components/contact';
import Footer from '../components/layout/footer';

import Header from '../components/layout/header';
import Slider from '../components/slider';


export async function getStaticProps(context) {
    try {
        // const res = await fetch('http://localhost:5010/worksites');
        // const d = await res.json()
        return {
            props: {
                locale: context.locale,
                ...await serverSideTranslations(context.locale, ['common']),
            },
        }
    } catch (error) {
        console.log('error', error);
    }
}


export default function Home(props) {
    const { t } = useTranslation('common')

    return (
        <>
            <Head>
                <title>Merta</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div id="preloader"></div>
            <div className="progress-wrap cursor-pointer">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>

            <Header t={t} language={props.locale} />
            <Slider />

            <div className="content-wrapper">
                <section className="content-lines-wrapper">
                    <div className="content-lines-inner">
                        <div className="content-lines"></div>
                    </div>
                </section>
                <AboutUs t={t} />
                <Contact t={t} />
                <Footer t={t} />
            </div>

            <script src="js/jquery-3.5.1.min.js"></script>
            <script src="js/jquery-migrate-3.0.0.min.js"></script>
            <script src="js/modernizr-2.6.2.min.js"></script>
            <script src="js/imagesloaded.pkgd.min.js"></script>
            <script src="js/jquery.isotope.v3.0.2.js"></script>
            <script src="js/pace.js"></script>
            <script src="js/popper.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/scrollIt.min.js"></script>
            <script src="js/jquery.waypoints.min.js"></script>
            <script src="js/owl.carousel.min.js"></script>
            <script src="js/jquery.stellar.min.js"></script>
            <script src="js/jquery.magnific-popup.js"></script>
            <script src="js/custom.js"></script>
        </>
    )
}