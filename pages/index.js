// import Header from './components/header';
import Link from 'next/link'

export default function Home() {
  return (
    <section className="hero">
      {/* <Header /> */}
      <div className="container">
        <div className="row">
          <div className="column-7">
            <h1 className="hero__title">Hero Title</h1>
            <h6 className="hero__subtitle">Hero Subtitle</h6>
          </div>
          <div className="column-5">
            <img src="" alt="hero img" />
          </div>
        </div>
        <div className="btn-home">
          <Link href="/works">
            <a className="btn btn__primary featured-project btn-fp">Featured Projects</a>
          </Link>          
        </div>
      </div>
    </section>
  )
}
