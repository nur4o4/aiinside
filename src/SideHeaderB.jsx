//side header including some page options (some pages use this side header)
import menu1 from '/Users/nuriscan/react-app/my-react-app/src/assets/header+side/Group 1142815067.png';
import menu2 from '/Users/nuriscan/react-app/my-react-app/src/assets/header+side/Group 1142815151.png';
import menu3 from '/Users/nuriscan/react-app/my-react-app/src/assets/header+side/Group 1142815066.png';
import menu4 from '/Users/nuriscan/react-app/my-react-app/src/assets/header+side/Group 427319043.png';

function HeaderB(){

    return(
        <>
        <button><img src={menu1} style={{position: 'absolute', top:70, left:12, transform: 'scale(0.8)', transformOrigin: 'top left',}} /></button>
        <button><img src={menu2} style={{position: 'absolute', top:110, left:12, transform: 'scale(0.8)', transformOrigin: 'top left',}} /></button>
        <button><img src={menu3} style={{position: 'absolute', top:150, left:12, transform: 'scale(0.8)', transformOrigin: 'top left',}} /></button>
        <button><img src={menu4} style={{position: 'absolute', top:190, left:12, transform: 'scale(0.8)', transformOrigin: 'top left',}} /></button>

        </>
    );
}

export default HeaderB
