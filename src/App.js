import errora from 'bootstrap/media/illustrations/sketchy-1/18.png';
import skt from 'bootstrap/media/illustrations/sketchy-1/1.png';

import img_11 from 'bootstrap/media/stock/600x600/img-11.jpg';
import img_12 from 'bootstrap/media/stock/600x600/img-12.jpg';
import img_20 from 'bootstrap/media/stock/600x600/img-20.jpg';
import img_21 from 'bootstrap/media/stock/600x600/img-21.jpg';
import img_22 from 'bootstrap/media/stock/600x600/img-22.jpg';
import img_23 from 'bootstrap/media/stock/600x600/img-23.jpg';

import google_icon from 'bootstrap/media/svg/brand-logos/google-icon.svg';
import facebook_4 from 'bootstrap/media/svg/brand-logos/facebook-4.svg';
import apple_black from 'bootstrap/media/svg/brand-logos/apple-black.svg';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${ img_22 })` }}>
      <h1 className="text-center text-dark">Something as title</h1>
      <div className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed">
        <div className="container">
          <div className="card card-docs mb-2">
          <div className="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="kt_illustration_sketchy-1">
                <div className="mb-10">30 Hand Drawn Sketch illustrations in 7 formats Figma, Sketch, Adobe Xd, Ai, PNG, JPG, SVG.</div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card overlay border">
                      <div className="card-body p-0">
                        <div className="overlay-wrapper h-300px bgi-no-repeat bgi-size-contain bgi-position-center" style={{ backgroundImage: `url(${ img_22 })` }}></div>
                        <div className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3">
                          <code className="py-2 px-4">Some label1</code>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card overlay border">
                      <div className="card-body p-0">
                      <div className="overlay-wrapper h-300px bgi-no-repeat bgi-size-contain bgi-position-center" style={{ backgroundImage: `url(${ img_21 })` }}></div>
                        <div className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3">
                          <code className="py-2 px-4">Some label</code>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card overlay border">
                      <div className="card-body p-0">
                      <div className="overlay-wrapper h-300px bgi-no-repeat bgi-size-contain bgi-position-center" style={{ backgroundImage: `url(${ img_20 })` }}></div>
                        <div className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3">
                          <code className="py-2 px-4">Some label</code>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card overlay border">
                      <div className="card-body p-0">
                      <div className="overlay-wrapper h-300px bgi-no-repeat bgi-size-contain bgi-position-center" style={{ backgroundImage: `url(${ img_12 })` }}></div>
                        <div className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3">
                          <code className="py-2 px-4">Some label</code>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card overlay border">
                      <div className="card-body p-0">
                      <div className="overlay-wrapper h-300px bgi-no-repeat bgi-size-contain bgi-position-center" style={{ backgroundImage: `url(${ img_11 })` }}></div>
                        <div className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3">
                          <code className="py-2 px-4">Some label</code>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card overlay border">
                      <div className="card-body p-0">
                      <div className="overlay-wrapper h-300px bgi-no-repeat bgi-size-contain bgi-position-center" style={{ backgroundImage: `url(${ img_23 })` }}></div>
                        <div className="overlay-layer card-rounded bg-dark bg-opacity-10 align-items-end pb-3">
                          <code className="py-2 px-4">Some label</code>
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


      {/* 
      <div className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed">
        <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
          <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
            <form className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" novalidate="novalidate" id="kt_sign_in_form" data-kt-redirect-url="../../demo1/dist/index.html" action="#">
              <div className="text-center mb-10">
                <h1 className="text-dark mb-3">Sign In to Metronic</h1>
                <div className="text-gray-400 fw-bold fs-4">New Here?
                <a href="../../demo1/dist/authentication/layouts/dark/sign-up.html" className="link-primary fw-bolder">Create an Account</a></div>
              </div>
              <div className="fv-row mb-10 fv-plugins-icon-container">
                <label className="form-label fs-6 fw-bolder text-dark">Email</label>
                <a href="#" className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">supossed to be an input box</a>
                <div className="fv-plugins-message-container invalid-feedback"></div>
              </div>
              <div className="fv-row mb-10 fv-plugins-icon-container">
                <div className="d-flex flex-stack mb-2">
                  <label className="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
                  <a href="../../demo1/dist/authentication/layouts/dark/password-reset.html" className="link-primary fs-6 fw-bolder">Forgot Password ?</a>
                </div>
                <a href="#" className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">supossed to be an input box</a>
                <div className="fv-plugins-message-container invalid-feedback"></div>
              </div>
              <div className="text-center">
                <button type="submit" id="kt_sign_in_submit" className="btn btn-lg btn-primary w-100 mb-5">
                  <span className="indicator-label">Continue</span>
                  <span className="indicator-progress">Please wait...
                  <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                </button>
                <div className="text-center text-muted text-uppercase fw-bolder mb-5">or</div>
								<div class="row">
									<div class="col-lg-6">
                    <a href="#" className="flex-center w-100">
                    <img alt="Logo" src={ img_23 } className="h-200px me-3" /></a>
                  </div>
									<div class="col-lg-6">
										<div class="row g-10">
									    <div class="col-lg-6">
                        <a href="#" className="flex-center w-100">
                        <img alt="Logo" src={ img_22 } className="h-100px me-3" /></a>
                      </div>
									    <div class="col-lg-6">
                        <a href="#" className="flex-center w-100">
                        <img alt="Logo" src={ img_21 } className="h-100px me-3" /></a>
                      </div>
                      <a href="#" className="flex-center w-100">
                      <img alt="Logo" src={ img_20 } className="h-100px me-3" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> 
      */}



{/* 
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-column flex-center flex-column-fluid p-10">
          <img src={ errora } className="mw-100 mb-10 h-lg-450px" alt="sary be" />
          <h1 className="fw-bold mb-10">Seems like it's working</h1>
          <p>but not fine yet thoush</p>
          <a href="#" className="btn btn-primary">Get it work!</a>
        </div>
      </div>
      
      <div className="mb-lg-n15 position-relative z-index-2">
        <div className="container">
          <div className="card">
            <div className="card-body p-lg-20">
              <div className="text-center mb-5 mb-lg-10">
                <h3 className="fs-2hx text-dark mb-5" id="portfolio" data-kt-scroll-offset="{default: 100, lg: 150}">Our Projects</h3>
              </div>
              <div className="d-flex flex-center mb-5 mb-lg-15">
								<ul className="nav border-transparent flex-center fs-5 fw-bold">
									<li className="nav-item">
										<a className="nav-link text-gray-500 text-active-primary px-3 px-lg-6 active" href="#" data-bs-toggle="tab" data-bs-target="#kt_landing_projects_latest">Latest</a>
									</li>
									<li className="nav-item">
										<a className="nav-link text-gray-500 text-active-primary px-3 px-lg-6" href="#" data-bs-toggle="tab" data-bs-target="#kt_landing_projects_web_design">Web Design</a>
									</li>
									<li className="nav-item">
										<a className="nav-link text-gray-500 text-active-primary px-3 px-lg-6" href="#" data-bs-toggle="tab" data-bs-target="#kt_landing_projects_mobile_apps">Mobile Apps</a>
									</li>
									<li className="nav-item">
										<a className="nav-link text-gray-500 text-active-primary px-3 px-lg-6" href="#" data-bs-toggle="tab" data-bs-target="#kt_landing_projects_development">Development</a>
									</li>
								</ul>
							</div>
              <div className="tab-content">
                <div className="tab-pane fade show active">
                  <div className="row g-10">
                    <div className="col-lg-6">
                      <img src={ img_23 } className="d-block card-rounded overlay" alt="img_23" />
                    </div>
                    <div className="col-lg-6">
                      <div className="row g-10 mb-10">
                        <div className="col-lg-6">
                          <img src={ img_22 } className="d-block card-rounded overlay" alt="img_23" />
                        </div>
                        <div className="col-lg-6">
                          <img src={ img_21 } className="d-block card-rounded overlay" alt="img_23" />
                        </div>
                      </div>
                      <img src={ img_20 } className="d-block card-rounded overlay" alt="img_23" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </div>
  );
}

export default App;
