//top header for all pages, and some consistent elements of the side header
import aiinside from './assets/hello.jpg';
import topheader from './assets/header+side/Rectangle 4702.png';
import headeraccessory from './assets/header+side/Group 1142815204.png';
import headeraccessory2 from './assets/header+side/Group 427319034 1.png';
import sideheader from './assets/header+side/Rectangle 4715.png';
import sideheaderbottom from './assets/header+side/Group 1367.png';
import nine from './assets/header+side/998.5.png';
import ninecircle from './assets/header+side/Rectangle 4808.png';
import symbols1 from './assets/header+side/通知.png';
import symbols2 from './assets/header+side/设置.png';
import bottomicon1 from '/Users/nuriscan/react-app/my-react-app/src/assets/header+side/Group 1285.png';
import bottomicon2 from '/Users/nuriscan/react-app/my-react-app/src/assets/header+side/Group 1283.png';
import bottomicon3 from '/Users/nuriscan/react-app/my-react-app/src/assets/header+side/Group 1284.png';

function Header(){

    return(
        <>
        <img src={topheader} style={{position: 'absolute', top:0, left:0, transform: 'scale(0.79)', transformOrigin: 'top left',}} />
        <img src={aiinside} style={{position: 'absolute', top:12, left:12, transform: 'scale(0.3)', transformOrigin: 'top left',}} />
        <img src={headeraccessory} style={{position: 'absolute', top:20, right:70, transform: 'scale(0.8)', transformOrigin: 'top right',}} />
        <img src={headeraccessory2} style={{position: 'absolute', top:15, right:20, transform: 'scale(0.8)', transformOrigin: 'top right',}} />
        <img src={sideheader} style={{position: 'absolute', top:58, left:0, transform: 'scale(0.8)', transformOrigin: 'top left',}} />
        <img src={sideheaderbottom} style={{position: 'absolute', left:5, bottom:98, transform: 'scale(0.8)', transformOrigin: 'bottom left',}} />
        <img src={ninecircle} style={{position: 'absolute', left:13, bottom:70, transform: 'scale(0.8)', transformOrigin: 'bottom left',}} />  
        <img src={nine} style={{position: 'absolute', left:55, bottom:80, transform: 'scale(0.8)', transformOrigin: 'bottom left',}} />
        <img src={symbols1} style={{position: 'absolute', left:55, bottom:50, transform: 'scale(0.8)', transformOrigin: 'bottom left',}} />
        <img src={symbols2} style={{position: 'absolute', left:55, bottom:20, transform: 'scale(0.8)', transformOrigin: 'bottom left',}} />
        <img src={bottomicon3} style={{position: 'absolute', left:25, bottom:-120, transform: 'scale(0.8)', transformOrigin: 'bottom left',}} />
        <img src={bottomicon2} style={{position: 'absolute', left:25, bottom:-85, transform: 'scale(0.8)', transformOrigin: 'bottom left',}} />
        <img src={bottomicon1} style={{position: 'absolute', left:25, bottom:-50, transform: 'scale(0.8)', transformOrigin: 'bottom left',}} />

        </>
    );
}

export default Header
