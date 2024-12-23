import menu3back from './assets/menu3back.png';
import { Link } from "react-router-dom";

function Menu3() {
  return (
    <>
    <div style={{ margin: 0, padding: 0 }}>
      <img
        src={menu3back}
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
    </div>
    </>
  );
}

export default Menu3;
