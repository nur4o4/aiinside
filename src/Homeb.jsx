//景观 page on home page
import homebtop from './assets/homeb/Group 1142815220.png';
import homebbottom from './assets/homeb/Group 1142815299.png';
import Header from './Header'
import HeaderB from './SideHeaderB';
import { Link } from "react-router-dom";

function Homeb() {
  return (
    <>
    {/* <div style={{ margin: 0, padding: 0 }}>
      <img
        src={homeb}
        alt="Menu3 Background"
        id="Menu3background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%', // Shrink by 50%
          height: 'auto', // Maintain aspect ratio
        }}
      />
    </div> */}
    <Header></Header>
    <HeaderB></HeaderB>
    <img src={homebtop} style={{position: 'absolute', top:70, left:210, transform: 'scale(0.78)', transformOrigin: 'top left',}} />
    <img src={homebbottom} style={{position: 'absolute', top:150, left:230, transform: 'scale(0.78)', transformOrigin: 'top left', paddingBottom: '10px'}} />
    <Link to="/home">
    <button id="homebmenu"></button>
    </Link>
    </>
  );
}

export default Homeb;
