import Link from 'next/link'
import {Breadcrumb, BreadcrumbItem} from './components/breadcrumb';

export default function detailProject() {
    return (
      <section className="detail-project">
        <div className="container">
          <Breadcrumb>
            <BreadcrumbItem>
              <a className="color-inherit">Our Works</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a className="color-inherit">View Case</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a className="color-inherit">Project Name</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <img className="img-fluid" src="" alt="Mockup" />
          <div className="row head-detail">
            <div className="column-6 mt-4 mb-4">
              <div className="detail__title">Detail Title</div>
              <div className="time">
                <p className="our-time mb-4">Time</p>
              </div>
              <div className="detail__subtitle mb-4 subtitle" style={{color: "black"}}>Detail Subtitle</div>
              <div className="text__desc">Text Description</div>
            </div>
            <div className="column-6 mt-4 mb-4">
              <div className="who-work">
                <div className="team-work">
                  <p className="title-desc">Title Description</p>
                  <p className="desc">Description</p>
                </div>
                <div className="team-work">
                  <p className="title-desc">Project Director</p>
                  <p className="desc">Description</p>
                </div>
                <div className="team-work">
                  <p className="title-desc">Developer Team</p>
                  <p className="desc">Description</p>
                </div>
                <div className="team-work">
                  <p className="title-desc">UI Design</p>
                  <p className="desc">Description</p>
                </div>
                <div className="share">
                  <p>Share:</p>
                  <a>
                    <img src="/facebook.svg" />
                  </a>
                  <a>
                    <img src="/twitter.svg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img src="" alt="Close Mockup" className="img-fluid mx-auto display__block" />
          <div className="row poin-detail">
            <div className="column-6 mt-4 mb-4">
              <div className="headline">
                <label className="text__number">.01</label>
                <h5 className="text__title">The <br /> Challenge</h5>
              </div>
            </div>
            <div className="column-6 mt-4 mb-4">
              <p className="text__subtitle text-dark">Text Subtitle</p>
            </div>
          </div>
          <div className="row poin-detail">
            <div className="column-6 mt-4 mb-4">
              <div className="headline">
                <label className="text__number">.02</label>
                <h5 className="text__title">Our <br /> Approach</h5>
              </div>
            </div>
            <div className="column-6 mt-4 mb-4">
              <p className="text__subtitle text-dark">Text Subtitle</p>
            </div>
          </div>
          <img src="" alt="Close Mockup" className="img-fluid mx-auto display__block" />
          <div className="row poin-detail">
            <div className="column-6 mt-4 mb-4">
              <div className="headline">
                <label className="text__number">.03</label>
                <h5 className="text__title">Strategy <br /> & UI-UX Design</h5>
              </div>
            </div>
            <div className="column-6 mt-4 mb-4">
              <p className="text__subtitle text-dark">Text Subtitle</p>
            </div>
          </div>
          <div className="row poin-detail">
            <div className="column-6 mt-4 mb-4">
              <p className="text__title">Text Title</p>
            </div>
          </div>
          <div className="row poin-detail">
            <div className="column-6 mt-4 mb-4">
              <div className="headline">
                <label className="text__number">.04</label>
                <h5 className="text__title">The <br /> Development</h5>
              </div>
            </div>
            <div className="column-6 mt-4 mb-4">
              <p className="text__subtitle text-dark">Text Subtitle</p>
            </div>
          </div>          
          <img src="" alt="Close Mockup" className="img-fluid mx-auto display__block" />
          <img src="" alt="Close Mockup" className="img-fluid mt-4 mb-5 mx-auto display__block" />
          <div className="row">
            <div className="column-12 mt-4">
              <p className="text__quote">Text Quote</p>
            </div>
          </div>
          <div className="row">
            <div className="column-12 mt-4 mb-4">
              <img src="https://img.icons8.com/ios/50/000000/user-male-circle.png" alt="Close Mockup" className="img-fluid" />
            </div>
            <div className="column-10 mt-4 mb-4 profil-testi">
              <h1 className="name-testimoni">Name Testimoni</h1>
              <h6 className="name-desc">Owner</h6>
            </div>
          </div>
          <br />
          <hr />
          <div className="row foot-detail grid__flex grid__flex--align-center">
            <div className="column-4 mt-4">
              <a className="btn btn__default">Send a request</a>
            </div>
            <div className="column-8 mt-4 grid__flex grid__flex--justify-between grid__flex--align-center text-truncate">
              <a className="text-dark text-truncate next-pro">Link Project</a>
              <a>
                <img src="/next.svg" className="img-fluid next-arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
  