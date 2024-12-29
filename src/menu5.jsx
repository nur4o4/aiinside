import Header from './Header';
import HeaderA from './SideHeaderA';
import box1 from '/Users/nuriscan/react-app/my-react-app/src/assets/menu5/Group 1271.png';
import box2 from '/Users/nuriscan/react-app/my-react-app/src/assets/menu5/Group 427319045.png';
import box3 from '/Users/nuriscan/react-app/my-react-app/src/assets/menu5/Group 427319046.png';
import box4 from '/Users/nuriscan/react-app/my-react-app/src/assets/menu5/Group 427319047.png';
import sideAddition from '/Users/nuriscan/react-app/my-react-app/src/assets/menu5/Group 1142815065.png';
import menuHighlight from '/Users/nuriscan/react-app/my-react-app/src/assets/menu5/Group 427319043.png';
import unMenuHighlight from '/Users/nuriscan/react-app/my-react-app/src/assets/menu5/Group 1142815067.png';
import { Link } from "react-router-dom";

function Menu5(){
    return(
        <>
        <Header></Header>
        <HeaderA></HeaderA>
        <img src={box1} style={{position: 'absolute', top:70, left:210, transform: 'scale(0.78)', transformOrigin: 'top left',}} />
        <img src={box2} style={{position: 'absolute', top:70, left:530, transform: 'scale(0.78)', transformOrigin: 'top left',}} />
        <img src={box3} style={{position: 'absolute', top:70, left:850, transform: 'scale(0.78)', transformOrigin: 'top left',}} />
        <img src={box4} style={{position: 'absolute', top:70, left:1170, transform: 'scale(0.78)', transformOrigin: 'top left',}} />
        <div style={{position: 'absolute', top: 230, left: 0,width: '180px',height: '40px',backgroundColor: 'white',}}></div>
        <img src={menuHighlight} style={{position: 'absolute', top:230, left:12, transform: 'scale(0.8)', transformOrigin: 'top left',}} />
        <div style={{position: 'absolute', top: 70, left: 0,width: '180px',height: '40px',backgroundColor: 'white',}}></div>
        <Link to="/home">
        <button style={{cursor: 'pointer'}}><img src={unMenuHighlight} style={{position: 'absolute', top:70, left:12, transform: 'scale(0.8)', transformOrigin: 'top left',}} /></button>
        </Link>
        <img src={sideAddition} style={{position: 'absolute', top:275, left:12, transform: 'scale(0.78)', transformOrigin: 'top left',}} />

        </>
    )
}

export default Menu5;
