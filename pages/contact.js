import Link from 'next/link'

export default function Contact() {
  return (
    <section className="contact">
      <header className="contact__header">
        <div className="container">
          <div className="row">
            <div className="column-6">
              <h1 className="text__title">Text Title</h1>
              <h1 className="text__title color-grey">Text Title</h1>
              <p className="text__subtitle">Text Subtitle</p>
            </div>
          </div>
        </div>
      </header>
      <div className="contact__body">
        <div className="container">
          <form className="mb-5">
            <h1 className="text__title mb-0">Services</h1>
            <div className="form-checkbox checkbox-services">
              <div className="form-check">
                <input name="design" type="checkbox" id="design" value="Interface Design" />
                <label htmlFor="design">Interface Design</label>
              </div>
              <div className="form-check">
                <input name="web" type="checkbox" id="webapps" value="Website" />
                <label htmlFor="webapps">Website</label>
              </div>
              <div className="form-check">
                <input name="mobile" type="checkbox" id="mobileapps" value="Mobile Apps" />
                <label htmlFor="mobileapps">Mobile Apps</label>
              </div>
              <div className="form-check">
                <input name="development" type="checkbox" id="development" value="Development" />
                <label htmlFor="development">Development</label>
              </div>
            </div>
            <h1 className="text__title mb-0 mt-5">Budget in USD</h1>
            <div className="form-checkbox checkbox-budget">
              <div className="form-check">
                <input type="checkbox" id="budget-1" value="" />
                <label htmlFor="budget-1">Less than 500K</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="budget-2" value="" />
                <label htmlFor="budget-2">500K-1000K</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="budget-3" value="" />
                <label htmlFor="budget-3">1000K-5000K</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="budget-4" value="" />
                <label htmlFor="budget-4">More than 5000K</label>
              </div>
            </div>
            <div className="row">
              <div className="column-4">
                <input type="text" name="name" placeholder="Name" value="" />
              </div>
              <div className="column-3">
                <input type="email" name="mail" placeholder="Email" value="" />
              </div>
            </div>
            <div className="row">
              <div className="column-7">
                <textarea rows="3" name="content" placeholder="Project Detail (optional)"></textarea>
              </div>
            </div>
            <div className="row">
              <div className="column-7">
                <input type="text" name="find" placeholder="How did you find Us" value="" />
              </div>
            </div>
            <div className="row">
              <div className="column-7">
                <button type="submit" className="btn-danger">Send a Request</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="contact__footer">
        <div className="container">
          <div className="row">
            <div className="column-4">
              <div className="title">
                <span className="title title__line"></span>
                <h3 className="text__title">Visit Us</h3>
              </div>
            </div>
            <div className="column-8">
              <h3 className="text-title__subtitle">PT. Ina Gata Persada</h3>
              <h3 className="text-title__subtitle">Perum Griya Shanta Blok L-110.</h3>
              <h3 className="text-title__subtitle">Malang - 65142, Indonesia</h3>
            </div>
          </div>
          <div className="row">
            <div className="column-4">
              <div className="title">
                <span className="title title__line"></span>
                <h3 className="text__title">Contact Us</h3>
              </div>
            </div>
            <div className="column-8">
              <h3 className="text-title__subtitle">+6281 333 666 937</h3>
              <h3 className="text-title__subtitle">+6285 648 582 531</h3>
              <h3 className="text-title__subtitle mt-5">info@inagata.com</h3>
            </div>
          </div>
          <hr className="line-break" />
          <div className="row pt-4 pb-4">
            <div className="column-4">
              <div className="title">
                <span className="title title__line"></span>
                <h3 className="text__title">Information</h3>
              </div>
            </div>
            <div className="column-8 grid__flex grid__flex-wrap">
              <div className="row">
                <div className="column-6 mb-4">
                  <h4 className="text__subtitle text__subtitle-size">Title</h4>
                  <p className="text__desc mt-3">Description</p>
                  <br />
                  <Link href="">
                    <a className="inf">Email Contact</a>
                  </Link>
                </div>
                <div className="column-6 mb-4">
                  <h4 className="text__subtitle text__subtitle-size">Title</h4>
                  <p className="text__desc mt-3">Description</p>
                  <br />
                  <Link href="">
                    <a className="inf">Email Contact</a>
                  </Link>
                </div>
                <div className="column-6 mb-4">
                  <h4 className="text__subtitle text__subtitle-size">Title</h4>
                  <p className="text__desc mt-3">Description</p>
                  <br />
                  <Link href="">
                    <a className="inf">Email Contact</a>
                  </Link>
                </div>
                <div className="column-6 mb-4">
                  <h4 className="text__subtitle text__subtitle-size">Title</h4>
                  <p className="text__desc mt-3">Description</p>
                  <br />
                  <Link href="">
                    <a className="inf">Email Contact</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row py-3">
            <div className="column-4">
                <h3 className="text__title text__title-size">Follow Us:</h3>
            </div>
            <div className="column-8 grid__flex grid__flex--justify-between grid__flex--wrap footer-social">
              <div>
                <Link href="https://www.facebook.com/inagatatechno/">
                  <a className="text__subtitle text__subtitle-size" target="_blank">Facebook</a>
                </Link>
              </div>
              <div>
                <Link href="https://www.instagram.com/inagatatechno/?hl=id">
                  <a className="text__subtitle text__subtitle-size" target="_blank">Instagram</a>
                </Link>
              </div>
              <div>
                <Link href="https://dribbble.com/inagata/about">
                  <a className="text__subtitle text__subtitle-size" target="_blank">Dribbble</a>
                </Link>
              </div>
              <div>
                <Link href="https://www.behance.net/inagatatechno">
                  <a className="text__subtitle text__subtitle-size" target="_blank">Behance</a>
                </Link>
              </div>
              <div>
                <Link href="https://www.linkedin.com/company/inagata-technosmith">
                  <a className="text__subtitle text__subtitle-size" target="_blank">Linkedin</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
  