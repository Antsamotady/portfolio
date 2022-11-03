import React, { useState } from 'react';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 , str: 'radial-gradient(circle at 100% 100%, #3498db, #fff)'});

  const onMyMouseMove = e => {
      setCursorPosition({ 
        left: Math.round(e.screenX/window.innerWidth * 100),
        top: Math.round(e.screenY/window.innerHeight * 100), 
        str: "radial-gradient(circle at " + 
          Math.round(e.screenX/window.innerWidth * 100) + 
          "% " +
          Math.round(e.screenY/window.innerHeight * 100) + 
          "% , #3498db, #fff)"
      });
      // console.log(cursorPosition.str);
  }
  
  const handleButtonclick = e => {
    console.log(e.target.value);
  }

  return (
    <div className="tsl-main-container" onMouseMove={onMyMouseMove} style={{
        background: `${cursorPosition.str}`
      }}>
      {/* top: {cursorPosition.top}%, left: {cursorPosition.left}% */}
      <div className="tsl-container">
        <nav className="tsl-nav">
          <div className="logo">Antsamotady</div>
          <div className="menu">
            <a><span className="svg-icon svg-icon-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
								<path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="black" />
								<path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="black" />
							</svg>
						</span></a>
          </div>
        </nav>
        <div className="tsl-middle">for my Ly</div>
        <footer className='tsl-footer'>
          <div className="radiogroup">
            <div className="wrapper">
              <input className="state" type="radio" name="appa" id="a0" value="a0" onClick={handleButtonclick}/>
              <label className="label" htmlFor="a0">
                <div className="indicator"></div>
              </label>
            </div>
            <div className="wrapper">
              <input className="state" type="radio" name="appa" id="a" value="a" onClick={handleButtonclick}/>
              <label className="label" htmlFor="a">
                <div className="indicator"></div>
              </label>
            </div>
            <div className="wrapper">
            <input className="state" type="radio" name="appa" id="b" value="b" onClick={handleButtonclick}/>
              <label className="label" htmlFor="b">
                <div className="indicator"></div>
              </label>
            </div>
            <div className="wrapper">
            <input className="state" type="radio" name="appa" id="c" value="c" onClick={handleButtonclick}/>
              <label className="label" htmlFor="c">
                <div className="indicator"></div>
              </label>
            </div>
          </div>
        </footer>
      </div>  
    </div>
  );

}

export default App;
