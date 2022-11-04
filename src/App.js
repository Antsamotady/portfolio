import React, { useState } from 'react';

function App() {
  const [color1, setColor1] = useState('#3498db')
  const [myStyle, setMyStyle] = useState({
    background: 'radial-gradient(circle at 100% 100%, #f0e876, #fff)'
  });

  const onMyMouseMove = e => {
    setMyStyle({
        background: "radial-gradient(circle at " + 
          Math.round(e.screenX/window.innerWidth * 100) + 
          "% " +
          Math.round(e.screenY/window.innerHeight * 100) + 
          "% ,"+ color1 +", #fff)"
      });
  }
  
  const handleButtonclick = e => {
    if(e.target.value === 'a0') setColor1('#ff0000');
    if(e.target.value === 'a') setColor1('#00ff00');
    if(e.target.value === 'b') setColor1('#0000ff');
    if(e.target.value === 'c') setColor1('#1e1e1e');
    if(e.target.value === 'd') setColor1('#fff');
  }

  return (
    <div className="tsl-main-container" onMouseMove={onMyMouseMove} style={myStyle}>
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
