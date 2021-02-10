import Link from 'next/link'

export default function Works() {
    return (
      <section className="feature">
        <div className="container">
          <div className="row">
            <div className="column-6">
              <div className="label">
                <label className="btn__danger btn-feature">Badge</label>
              </div>
              <div className="our-title">
                <h1 className="feature__title pointer">Title Project</h1>
              </div>
              <div className="our-subtitle">
                <h6 className="feature__subtitle feature__subtitle-our">Subtitle Project</h6>
              </div>
              <div className="view">
                <Link href="/detail-project">
                  <a className="btn btn__primary featured-project featured-project-our">View Case</a>
                </Link>
              </div>
            </div>
            <div className="column-6">
              <img sr="" alt="project 1" />
            </div>
          </div>
          <div className="row">
            <div className="column-6">
              <div className="label">
                <label className="btn__danger btn-feature">Badge</label>
              </div>
              <div className="our-title">
                <h1 className="feature__title pointer">Title Project</h1>
              </div>
              <div className="our-subtitle">
                <h6 className="feature__subtitle feature__subtitle-our">Subtitle Project</h6>
              </div>
              <div className="view">
                <Link href="/detail-project">
                  <a className="btn btn__primary featured-project featured-project-our">View Case</a>
                </Link>
              </div>
            </div>
            <div className="column-6">
              <img sr="" alt="project 2" />
            </div>
          </div>
        </div>
      </section>
    )
  }
  