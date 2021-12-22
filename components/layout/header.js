import { useRouter } from 'next/router'


const languages = {
    tr: 'English',
    en: 'Türkçe'
}

export default function Header({ t, language }) {
    const changeLanguageHref = (l) => l === 'tr' ? '/en' : '/';
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="logo" href="index.html">
                    <img src="logo.png" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="icon-bar"><i className="ti-line-double"></i></span> </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#" data-scroll-nav="0">
                                {t('Home')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-scroll-nav="1">
                                {t('About')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                {t('Projects')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-scroll-nav="2">
                                {t('Contact')}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={changeLanguageHref(language)}>
                                {languages[language]}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
