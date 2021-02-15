import Link from 'next/link'

function Header() {
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="navbar__wrapper">
            <div className="navbar__logo">
              <Link href="/">
                <img src="" alt="Inagata" />
              </Link>
            </div>
            <div className="navbar__menu">
              <a href="#">
                <span className="navbar__menu-toggle"></span>
                <span className="navbar__menu-toggle navbar__menu-toggle-size"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section className="menu-overlay" style={{display: showMe?"block":"none"}}>
        <div className="container">
          <ul className="nav-primary">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/service">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/works">
                <a>Our Works</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="https://blog.inagata.com/">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="sosmed-menu">
          <Link className="facebook" href="https://www.facebook.com/inagatatechno/">
            <a>Facebook</a>
          </Link>
          <Link className="instagram" href="https://www.instagram.com/inagatatechno/?hl=id">
            <a>Instagram</a>
          </Link>
          <Link className="dribble" href="https://dribbble.com/inagata/about">
            <a>Dribble</a>
          </Link>
          <Link className="behance" href="https://www.behance.net/inagatatechno">
            <a>Behance</a>
          </Link>
          <Link className="linkedin" href="https://www.linkedin.com/company/inagata-technosmith">
            <a>Linkedin</a>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Header