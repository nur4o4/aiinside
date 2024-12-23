//first page of the Figma, home page
import home from './assets/home.png';
import home2 from './assets/home2.png';
import homeCenter from '/Users/nuriscan/react-app/my-react-app/src/assets/homeA/homeAcenter.png';
import bedHover from '/Users/nuriscan/react-app/my-react-app/src/assets/homeA/Group 1142815141.png';
import starHover from '/Users/nuriscan/react-app/my-react-app/src/assets/homeA/Group 1142815153.png';
import buttonHover from '/Users/nuriscan/react-app/my-react-app/src/assets/homeA/Group 1142815152.png';
import Header from './Header';
import HeaderA from './SideHeaderA';
import { Link } from "react-router-dom";

function App2() {
  return (
    <>
    <Header></Header>
    <HeaderA></HeaderA>
    <div style={{ margin: 0, padding: 0 }}>
      {/* <img
        src={home}
        alt="App2 Background"
        id="app2background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%', // Shrink by 50%
          height: 'auto', // Maintain aspect ratio
        }}
      /> */}
    </div>
    <img src={homeCenter} style={{position: 'absolute', top:70, left:200, transform: 'scale(0.56)', transformOrigin: 'top left',}} />
    <img id="bedHover" src={bedHover} style={{position: 'absolute', top:108, left:860, transform: 'scale(0.792)', transformOrigin: 'top left', opacity:'0'}} />
    <img id="starHover" src={starHover} style={{position: 'absolute', top:118, left:870, transform: 'scale(0.792)', transformOrigin: 'top left', opacity:'0'}} />
    <img id="buttonHover" src={buttonHover} style={{position: 'absolute', top:118, left:1033, transform: 'scale(0.792)', transformOrigin: 'top left', opacity:'0'}} />    
    <Link to="/home2">
    <button id="homebedbutton"
    onMouseEnter={() => {
    document.getElementById('bedHover').style.opacity = '1';
    document.getElementById('starHover').style.opacity = '1';
    document.getElementById('buttonHover').style.opacity = '1';
    }}
    onMouseLeave={() => {
    document.getElementById('bedHover').style.opacity = '0';
    document.getElementById('starHover').style.opacity = '0';
    document.getElementById('buttonHover').style.opacity = '0';
  }}
></button>
    </Link>
    <Link to="/menu3">
    <button id="homecornerbutton"
    onMouseEnter={() => {
      document.getElementById('bedHover').style.opacity = '1';
      document.getElementById('starHover').style.opacity = '1';
      document.getElementById('buttonHover').style.opacity = '1';
      }}
      onMouseLeave={() => {
      document.getElementById('bedHover').style.opacity = '0';
      document.getElementById('starHover').style.opacity = '0';
      document.getElementById('buttonHover').style.opacity = '0';
    }}    
    ></button>
    </Link>
    <Link to="/homeb">
    <button id="homemenu"></button>
    </Link>
    </>
  );
}

export default App2;
