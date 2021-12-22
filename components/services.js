export default function Services({ module }) {
    return (
        <section id="services" className="services section-padding" data-scroll-index="3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="section-title">Our <span>Services</span></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="item">
                            <a href="architecture.html"> <img src="img/icons/icon-1.png" alt="" />
                                <h5>Architecture</h5>
                                <div className="line"></div>
                                <p>Architecture bibendum eros eget lacus the vulputate sit amet vehicuta nibhen ulicera in the vitae miss.</p>
                                <div className="numb">01</div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item">
                            <a href="interior-design.html"> <img src="img/icons/icon-2.png" alt="" />
                                <h5>Interior Design</h5>
                                <div className="line"></div>
                                <p>Architecture bibendum eros eget lacus the vulputate sit amet vehicuta nibhen ulicera in the vitae miss.</p>
                                <div className="numb">02</div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item">
                            <a href="urban-design.html"> <img src="img/icons/icon-3.png" alt="" />
                                <h5>Urban Design</h5>
                                <div className="line"></div>
                                <p>Architecture bibendum eros eget lacus the vulputate sit amet vehicuta nibhen ulicera in the vitae miss.</p>
                                <div className="numb">03</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
