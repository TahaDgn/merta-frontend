export default function Slideer({ module }) {
    return (
        <header id="home" className="header slider-fade" data-scroll-index="0">
            <div className="owl-carousel owl-theme">
                <div className="text-left item bg-img" data-overlay-dark="3" data-background="img/slider/1.jpg">
                    <div className="v-middle caption mt-30">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="o-hidden">
                                        <h1>Innovate Desing in Toronto</h1>
                                        <p>Architecture viverra tellus nec massa dictum the euismoe.
                                            <br />Curabitur viverra the posuere aukue velit.
                                        </p>
                                        <div className="butn-light mt-30 mb-30">
                                            <a href="https://1.envato.market/mDnXD" target="_blank"><span>Buy Now</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-left item bg-img" data-overlay-dark="4" data-background="img/slider/2.jpg">
                    <div className="v-middle caption mt-30">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="o-hidden">
                                        <h1>Innovate Desing in Canada</h1>
                                        <p>Architecture viverra tellus nec massa dictum the euismoe.
                                            <br />Curabitur viverra the posuere aukue velit.
                                        </p>
                                        <div className="butn-light mt-30 mb-30">
                                            <a href="https://1.envato.market/mDnXD" target="_blank"><span>Buy Now</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
