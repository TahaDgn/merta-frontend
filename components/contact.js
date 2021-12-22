export default function Contact({ t }) {
    return (
        <section id="contact" className="section-padding" data-scroll-index="2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 animate-box" data-animate-effect="fadeInUp">
                        <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('Contact Us Title') }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 mb-30 animate-box" data-animate-effect="fadeInUp">
                        <p>Our firm nisl sodales sit amet sapien idea placerat sodales orcite. Vivamus ne miss rhoncus felis bauen architecture.</p>
                        <p><b>VAT :</b> USA002323065B06</p>
                    </div>
                    <div className="col-md-4 mb-30 animate-box" data-animate-effect="fadeInUp">
                        <p><b>Phone :</b> +1 203-123-0606</p>
                        <p><b>Email :</b> architecture@bauen.com</p>
                        <p><b>Address :</b> 24 King St, Charleston, 29401 USA</p>
                    </div>
                    {/* <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                        <form method="post" className="row">
                            <div className="col-md-12">
                                <input type="text" name="name" id="name" placeholder="Full Name" />
                            </div>
                            <div className="col-md-12">
                                <input type="email" name="email" id="email" placeholder="Your Email" required="" />
                            </div>
                            <div className="col-md-12">
                                <textarea name="message" id="message" cols="40" rows="3" placeholder="Your Message"></textarea>
                            </div>
                            <div className="col-md-12">
                                <button className="butn-dark mt-15"><a href="#0"><span>Send</span></a></button>
                            </div>
                        </form>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
