import React, { useState } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

import Ly from './public/Ld.JPG';
import Neh_9_20 from './public/Neh_9_20.jpg';
import myself from './public/IMG_20200418_172346.jpg';
import Sal_122 from './public/Sal_122.7.png';
import saka from './public/IMG_20170514_170825.jpg';
import Mn from './public/Mn.png';
import Ephes_6 from './public/Ephes_6.12.png';
import Dm from './public/Dm.png';
import swim from './public/vlcsnap-2021-05-08-07h09m42s163.png';
import Bd from './public/Bd.png';
import Lio_15_18a from './public/Lio_15_18a.png';
import kiki from './public/DSC_0344.JPG';
import sea from './public/splash_cropped.png';
import II_Tim_4 from './public/II_Tim_4.5.png';
import cover from './public/cover.png';
import Dan_12_3 from './public/Dan_12_3.jpg';
import postal_card from './public/DSC_0273.JPG';

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
    id: 0,
    head: 'Dear visitor',
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
    let msgId; let msgHead; let msgBody; let msgFoot;
    msgHead = msgBody = msgFoot = '';
    if(e.target.value === 'a0') {
      color2 = '#ff0000';
      msgId = 1;
      msgHead = 'Hello! I am';
      msgBody = 'Garry';
      msgFoot = 'I am a web developer actually oriented to graphic design. Freelance web designer, please send me an email if you are interested in my work.';
    }
    if(e.target.value === 'a') {
      color2 = 'rgb(36, 69, 36)';
      msgId = 2;
      msgHead = 'Know me more through';
      msgBody = 'Photography';
      msgFoot = 'Here are some of my works';
    }
    if(e.target.value === 'b') {
      color2 = '#0000ff';
      msgId = 3;
      msgHead = 'Have a look at my';
      msgBody = 'Digital Painting';
      msgFoot = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus nostrum consectetur perferendis vel iure incidunt accusantium molestias a corporis aspernatur facilis voluptas similique, cumque nam dignissimos explicabo omnis voluptates!';
    }
    if(e.target.value === 'c') {
      color2 = '#1e1e1e';
      msgId = 4;
      msgHead = 'Look at';
      msgBody = 'Text art';
      msgFoot = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus nostrum consectetur perferendis vel iure incidunt accusantium molestias a corporis aspernatur facilis voluptas similique, cumque nam dignissimos explicabo omnis voluptates!';
    }
    if(e.target.value === 'd') {
      color2 = '#fff';
      msgId = 5;
      msgHead = 'Simple';
      msgBody = 'Visual design';
      msgFoot = 'From here I invite you to have a look at my website experiment';
    }

    setMyStyle({
      background: "radial-gradient(circle at " + position.posX + "% " + position.posY + "% ,"+ color2 +", #fff)"
    });

    setColor1(color2);

    setMsg({id:msgId, head:msgHead, body:msgBody, foot:msgFoot })

  }


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

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

          <div className="tsl-carousel" style={{ display: msg.id===2 ? 'block' : 'none' }}>

            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Ly}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={swim}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={saka}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={sea}
                  alt="Fourth slide"
                />
              </Carousel.Item>
            </Carousel>

          </div>


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
            <div className="wrapper">
            <input className="state" type="radio" name="appa" id="d" value="d" onClick={handleButtonclick}/>
              <label className="label" htmlFor="d">
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
