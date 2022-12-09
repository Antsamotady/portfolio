import React, { Component } from 'react';

import Ly from './public/Ld.JPG';
import Neh_9_20 from './public/Neh_9_20.jpg';
import myself from './public/IMG_20200418_172346.jpg';
import Sal_122 from './public/Sal_122.7.png';
import saka from './public/IMG_20170514_170825.jpg';
import Mn from './public/Mn.jpg';
import Ephes_6 from './public/Ephes_6.12.png';
import Dm from './public/Dm.jpg';
import swim from './public/vlcsnap-2021-05-08-07h09m42s163.jpg';
import Bd from './public/Bd.jpg';
import Lio_15_18a from './public/Lio_15_18a.png';
import kiki from './public/DSC_0344.JPG';
import II_Tim_4 from './public/II_Tim_4.5.png';
import cover from './public/cover.png';
import Dan_12_3 from './public/Dan_12_3.jpg';
import postal_card from './public/DSC_0273.JPG';

import youtube from './bootstrap/media/svg/social-logos/youtube.svg';
import github from './bootstrap/media/svg/social-logos/github.svg';
import insta from './bootstrap/media/svg/social-logos/instagram.svg';
import fb from './bootstrap/media/svg/social-logos/facebook.svg';
import gmail from './bootstrap/media/svg/social-logos/gmail.svg';
import stack from './logo-stackoverflow-svgrepo-com.svg';

import drawing_1 from './public/drawing_1.png';
import logo from './public/logo.png';
import logo_texture_2 from './public/logo_texture_2.png';
import TL_texture from './public/TL_texture.png';
import go_vote from './public/go-votee.jpg';
import simple_blending_v1 from './public/simple_blending_v1.jpg';
import Andraikiba_2 from './public/Andraikiba_2.jpg';
import Andraikiba_1 from './public/Andraikiba.jpg';

import paysage_1 from './public/DSC_0584.JPG';
import paysage_2 from './public/DSC_0581.JPG';
import paysage_3 from './public/DSC_0552.JPG';
import paysage_4 from './public/DSC_0669.JPG';
import paysage_5 from './public/DSC_0677.JPG';
import paysage_6 from './public/DSC_0292.JPG';
import paysage_7 from './public/DSC_0307.JPG';
import paysage_8 from './public/DSC_1014.JPG';
import paysage_9 from './public/DSC_0804.JPG';
import paysage_10 from './public/DSC_0912.JPG';


class App extends Component {
  constructor() {
    super()
    this.state = {
      idConst: 'TL_texture',
      isOpen: false
    }
  }
  
  handleShowImage = (e) => {
    this.setState({ idConst: e.target.id });
    this.setState({ isOpen: !this.state.isOpen });
  }

render() {
    return (
      // <div className="App bg-dark" style={{ backgroundImage: `url(${ myown_bg })` }}>
      <div className="App bg-light">

        <div className="text-center">
          <div className="fw-bold fs-3 text-white mb-2"><i className="las la-tint fs-2x"></i></div>
          <h1 className="fs-2hx fw-bolder">
            <p className="display-1 text-hover-primary ls-5">Garry</p><span className="text-white">&nbsp;here!</span></h1>
            <div className="fw-bold fs-3 text-muted mb-10">
              Graphic Designer & Web developer
              <span><a href="mailto:tsilavinarj02@gmail.com?subject=Want%20to%20know%20more&body=Hi%20Garry!" className="text-muted text-hover-primary px-2">
              <span className="text-gray-800"><img alt="Keenthemes Youtube" src={ gmail } className="h-20px" /></span>
            </a></span>
            </div>
        </div>

        { this.state.isOpen && (
              <div className="d-flex align-items-center justify-content-center" open onClick={ this.handleShowImage }>
                  <img className="img-fluid rounded mw-75 shadow" src={ `../${this.state.isOpen ? this.state.idConst : "TL_texture.png"}` } onClick={ this.handleShowImage } alt="no image" />
                  <code className="py-2 px-4 mb-5 align-self-end" style={{ position: 'absolute' }}>{this.state.isOpen ? this.state.idConst : "beutiful pic"}</code>
              </div>
        )}

        <div className="d-flex flex-column-fluid bgi-position-y-bottom bgi-no-repeat bgi-size-contain bgi-attachment-fixed mb-10">
          <div className="container" style={{ display: this.state.isOpen ? 'none' : 'block' }}>
            <div className="card card-docs mb-2">
              <div className="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700">
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="kt_illustration_sketchy-1">
                    <div className="mb-10">
                      <p className="lead">Here are some of my works.</p>
                      As you can see, I mostly do text art, though Digital Painting and Photography are also my hobbies. Without forgetting Postering, Video Editing, Logo Design.<br/>Please visit my socials down below if you want to see more.
                    </div>
                    <div className="truc">Main tools : <span className="text-muted text-hover-primary px-2">Illustrator ~ Photoshop</span></div>
                    <div className="row z-index-2">
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                            <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ TL_texture })` }}></div>
                            <div id="TL_texture.png" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Logo design</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                            <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ Neh_9_20 })` }}></div>
                            <div id="Neh_9_20.jpg" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Typography</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ myself })` }}></div>
                            <div id="IMG_20200418_172346.jpg" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Portrait</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ Sal_122 })` }}></div>
                            <div id="Sal_122.7.png" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Text formating</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ logo })` }}></div>
                            <div id="logo.png" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Logo design</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ saka })` }}></div>
                            <div id="IMG_20170514_170825.jpg" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Animal photography</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ Mn })` }}></div>
                            <div id="Mn.png" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Digital painting</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ go_vote })` }}></div>
                            <div id="go-votee.jpg" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Vector illustration</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ Dm })` }}></div>
                            <div id="Dm.png" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Digital painting</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ swim })` }}></div>
                            <div id="vlcsnap-2021-05-08-07h09m42s163.png" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Sport photography</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ Bd })` }}></div>
                            <div id="Bd.png" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Digital painting</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ Lio_15_18a })` }}></div>
                            <div id="Lio_15_18a.png" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Typography</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ kiki })` }}></div>
                            <div id="DSC_0344.JPG" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Animal photography</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ II_Tim_4 })` }}></div>
                            <div id="II_Tim_4.5.png" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Typography</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ simple_blending_v1 })` }}></div>
                            <div id="simple_blending_v1.jpg" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Logo design</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ Dan_12_3 })` }}></div>
                            <div id="Dan_12_3.jpg" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Typography</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ postal_card })` }}></div>
                            <div id="DSC_0273.JPG" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Postal card</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ logo_texture_2 })` }}></div>
                            <div id="logo_texture_2.png" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Logo design</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ Andraikiba_2 })` }}></div>
                            <div id="Andraikiba_2.jpg" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Landscape</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ paysage_1 })` }}></div>
                            <div id="DSC_0584.JPG" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Landscape</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ paysage_2 })` }}></div>
                            <div id="DSC_0581.JPG" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Landscape</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ paysage_3 })` }}></div>
                            <div id="DSC_0552.JPG" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Landscape</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ paysage_4 })` }}></div>
                            <div id="DSC_0669.JPG" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Landscape</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ paysage_5 })` }}></div>
                            <div id="DSC_0677.JPG" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Landscape</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ paysage_6 })` }}></div>
                            <div id="DSC_0292.JPG" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Landscape</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ paysage_7 })` }}></div>
                            <div id="DSC_0307.JPG" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Landscape</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ paysage_8 })` }}></div>
                            <div id="DSC_1014.JPG" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Landscape</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ paysage_9 })` }}></div>
                            <div id="DSC_0804.JPG" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Biking</code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card overlay border">
                          <div className="card-body p-0">
                          <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px" style={{ backgroundImage: `url(${ paysage_10 })` }}></div>
                            <div id="DSC_0912.JPG" className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3" onClick={ this.handleShowImage }>
                              <code className="py-2 px-4">Landscape</code>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="d-flex flex-center flex-column-auto p-10">
          Interested? <span className="text-muted text-hover-primary px-2"> Please contact me:</span>
          <div className="d-flex align-items-center fw-bold fs-6">
            <a href="mailto:tsilavinarj02@gmail.com?subject=Want%20to%20know%20more&body=Hi%20Garry!" className="text-muted text-hover-primary px-2">
              <span className="text-gray-800"><img alt="GMail logo" src={ gmail } className="h-20px" /></span>
            </a>
            {/* <a href="mailto:support@keenthemes.com" className="text-muted text-hover-primary px-2">Contact</a>
            <a href="https://1.envato.market/EA4JP" className="text-muted text-hover-primary px-2">Contact Us</a> */}
          </div>
        </div>

        {/* Socials */}
        <div className="container" style={{ display: this.state.isOpen ? 'none' : 'block' }}>
          <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
            {/* <div className="text-dark order-2 order-md-1">
            <span className="text-muted fw-bold me-1"><a href="mailto:tsilavinarj02@gmail.com?subject=Want%20to%20know%20more&body=Hi%20Garry!">email me</a></span>
            </div> */}
            <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1 align-items-center mb-3 mb-md-0">
              <li className="menu-item">
                <a href="https://web.facebook.com/media/set/?set=a.3321396001522010&type=3" target="_blank" className="menu-link px-3">
                  <img alt="Keenthemes Facebook" src={ fb } className="h-20px" />
                </a>
              </li>
              <li className="menu-item">
                <a href="https://stackoverflow.com/users/9532910/antsamotady" target="_blank" className="menu-link px-3">
                  <img alt="Keenthemes Facebook" src={ stack } className="h-20px" />
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link px-3">
                  <img alt="Keenthemes Youtube" src={ youtube } className="h-20px" />
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link px-3">
                  <img alt="Keenthemes Github" src={ github } className="h-20px" />
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link px-3">
                  <img alt="Keenthemes Instagram" src={ insta } className="h-20px" />
                </a>
              </li>
            </ul>
          </div>
        </div>


      </div>
    );
  }
}
export default App;
