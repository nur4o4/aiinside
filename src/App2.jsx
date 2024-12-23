//page after clicking on the bed from the home page
import app2 from './assets/app2素材中心-公共 1.png';
import rect from './assets/app2Rectangle 5050.png'
import bed from './assets/app2Rectangle 4811.png'
import title from './assets/app2暖色装修风格.png'
import descrip from './assets/app2图片简介部分内容图片简介部分内容图片简介部分内容图片简介部分内容图片简介部分内容图片简介部分内容图片简介部分内容图片简介部分内容图片简介部分内容图片简介部分内容图片.png'
import nextpagebutton from './assets/app2Group.png'
import ex from './assets/app2Frame.png'
import star from './assets/app2Group 1142815153.png'
import { Link } from "react-router-dom";

function App2() {
  return (
    <>
    <div style={{ margin: 0, padding: 0 }}>
      <img
        src={app2}
        alt="App2 Background"
        id="app2background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%', // Shrink by 50%
          height: 'auto', // Maintain aspect ratio
        }}
      />
    </div>
    <div style={{ margin: 0, padding: 0 }}>
      <img
        src={rect}
        style={{
          position: 'absolute',
          bottom: -350,
          left: -175,
          transform: `scale(${0.39})`
        }}
      />
    </div>
    <div style={{ margin: 0, padding: 0 }}>
      <img
        src={bed}
        alt="App2 Background"
        id="app2background"
        style={{
          position: 'absolute',
          top: 150,
          left: 415,
          width: '30%', // Shrink by 50%
          height: 'auto', // Maintain aspect ratio
        }}
      />
    </div>
    <div style={{ margin: 0, padding: 0 }}>
      <img
        src={title}
        style={{
          position: 'absolute',
          top: 140,
          left: 810,
          transform: 'scale(0.4)',
        }}
      />
    </div>
    <div style={{ margin: 0, padding: 0 }}>
      <img
        src={descrip}
        style={{
          position: 'absolute',
          top: 70,
          left: 718,
          transform: 'scale(0.4)',
        }}
      />
    </div>

    <div>
      <Link to="/home">
        <img
          src={ex}
          alt="Exit"
          style={{
            cursor: "pointer", // Makes the image behave like a button
            position: "absolute", // Position it as needed
            top: 130, // Adjust as needed
            left: 1080, // Adjust as needed
            zIndex: 999,
            transform: 'scale(0.4)',
          }}
        />
      </Link>
    </div>
    <img
        src={star}
        style={{
          position: 'absolute',
          top: 660,
          left: 860,
          transform: 'scale(0.4)',
        }}
      />
      <Link to="/menu3">
      <img
        src={nextpagebutton}
        style={{
          position: 'absolute',
          top: 660,
          left: 910,
          transform: 'scale(0.4)',
        }}
      />
      </Link>
    </>
  );
}

export default App2;
