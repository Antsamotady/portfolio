import 'bootstrap/plugins/global/plugins.bundle.css';
import 'bootstrap/css/style.bundle.css';
// import 'bootstrap/plugins/global/plugins.bundle.js';
import errora from 'bootstrap/media/illustrations/sketchy-1/18.png';

function App() {
  return (
    <div className="App">

      <div className="auth-bg">
        <div className="d-flex flex-column flex-root">
          <div className="d-flex flex-column flex-center flex-column-fluid p-10">
            <img src={ errora } className="mw-100 mb-10 h-lg-450px" alt="sary be" />
            <h1 className="fw-bold mb-10">Seems there is nothing here</h1>
            <a href="#" className="btn btn-primary">Return Home</a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
