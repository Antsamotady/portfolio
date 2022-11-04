import React, { useState } from 'react';

function App() {
  const [color1, setColor1] = useState('#fff');
  const [position, setPosition] = useState({
    posX: 100,
    posY: 100
  })
  const [myStyle, setMyStyle] = useState({
    background: 'radial-gradient(circle at 100% 100%, #fff, #fff)'
  });
  const [msg, setMsg] = useState({
    head: 'Welcome dear visitor!',
    body: 'Experience design',
    foot: 'Recently I’ve been interested in web design so I started learning Reactjs. It would be really interesting for me if I make a job of it. I feel the potential it has.'
  })

  const onMyMouseMove = e => {
    setPosition({
      posX: Math.round(e.screenX/window.innerWidth * 100),
      posY: Math.round(e.screenY/window.innerHeight * 100)
    });

    setMyStyle({
      background: "radial-gradient(circle at " + position.posX + "% " + position.posY + "% ,"+ color1 +", #fff)"
    });
  }
  
  const handleButtonclick = e => {
    let color2 = '#fff';
    let msgHead; let msgBody; let msgFoot;
    msgHead = msgBody = msgFoot = '';
    if(e.target.value === 'a0') {
      color2 = '#ff0000';
      msgHead = 'text0';
      msgBody = 'lorem ipsum';
      msgFoot = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus nostrum consectetur perferendis vel iure incidunt accusantium molestias a corporis aspernatur facilis voluptas similique, cumque nam dignissimos explicabo omnis voluptates!';
    }
    if(e.target.value === 'a') {
      color2 = '#00ff00';
      msgHead = 'text a';
      msgBody = 'lorem ipsum a';
      msgFoot = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus nostrum consectetur perferendis vel iure incidunt accusantium molestias a corporis aspernatur facilis voluptas similique, cumque nam dignissimos explicabo omnis voluptates!';
    }
    if(e.target.value === 'b') {
      color2 = '#0000ff';
      msgHead = 'text b';
      msgBody = 'lorem ipsum b';
      msgFoot = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus nostrum consectetur perferendis vel iure incidunt accusantium molestias a corporis aspernatur facilis voluptas similique, cumque nam dignissimos explicabo omnis voluptates!';
    }
    if(e.target.value === 'c') {
      color2 = '#1e1e1e';
      msgHead = 'text c';
      msgBody = 'lorem ipsum c';
      msgFoot = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus nostrum consectetur perferendis vel iure incidunt accusantium molestias a corporis aspernatur facilis voluptas similique, cumque nam dignissimos explicabo omnis voluptates!';
    }
    if(e.target.value === 'd') {
      color2 = '#fff';
      msgHead = 'text d';
      msgBody = 'lorem ipsum d';
      msgFoot = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus nostrum consectetur perferendis vel iure incidunt accusantium molestias a corporis aspernatur facilis voluptas similique, cumque nam dignissimos explicabo omnis voluptates!';
    }

    setMyStyle({
      background: "radial-gradient(circle at " + position.posX + "% " + position.posY + "% ,"+ color2 +", #fff)"
    });

    setColor1(color2);

    setMsg({head:msgHead, body:msgBody, foot:msgFoot })

  }

  return (
    <div className="tsl-main-container" onMouseMove={onMyMouseMove} style={myStyle}>
      <div className="tsl-container">
        <nav className="tsl-nav">
          <div className="logo" onClick={() => window.location.reload(false)}></div>
          <div className="right-menu">
            <a className="menu-link" href='#' onClick={() => window.location.reload(false)}>About</a>
            <a className="menu-link" href='https://test-tsl-portfolio.netlify.app'>Other</a>
            <a className="menu-link" href="mailto:rajaonarison.hasintsilavina@gmail.com?subject=Reaching20%Out&body=How%20are%20you">Contact</a>
          </div>
        </nav>
        
        <div className="tsl-middle">
          <div className="txt txt-head">{msg.head}</div>
          <div className="txt txt-body">{msg.body}</div>
          <div className="txt txt-foot">{msg.foot}</div>
        </div>
        
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
