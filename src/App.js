import logo from './logo.svg';

import './App.css';
import 'bootstrap/plugins/global/plugins.bundle.css';
import 'bootstrap/css/style.bundle.css';
import bigSary from 'bootstrap/media/illustrations/sketchy-1/1-dark.png';

function App() {
  return (
    <div className="App">

      <div class="d-flex flex-column flex-root">
          <div class="d-flex flex-column flex-center flex-column-fluid p-10">

          <img src={ bigSary } className="mw-100 mb-10 h-lg-450px" alt="sary be" />
          <h1 className="fw-bold mb-10" style="color:#A3A3C7">Seems there is nothing here</h1>
          <a href="#" className="btn btn-primary">Return Home</a>
        </div>
      </div>
    </div>
  );
}

export default App;
