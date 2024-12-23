import Footer from './Footer.jsx'
import Food from './Food.jsx'
import aiinside from './assets/hello.jpg';
import ss1 from './assets/Screenshot1.png'
import ss2 from './assets/Screenshot2.png'
import ss3 from './assets/Screenshot3.png'
import ss4 from './assets/Screenshot4.png'
import { Link } from "react-router-dom";

function App1() {
  return(
    <>
    <div>
        <header>
        <div id="box1"></div>
        <img src={aiinside} alt=""/>
            {/* <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav> */}
        </header>
    </div>
    <div>
      <aside>
        <div id="box2"></div>
      </aside>
    </div>    
    <div>
      <main>
        <div id="box3"></div>
        <hm>室内</hm>
        <hm>景观</hm>
        <hm>曲券产县</hm>
        <hm>室内</hm>
        <hm>室内</hm>
        <hm>室内</hm>
        <hm>室内</hm>
        <div className="air1">
        <img src={ss1} id="image11"/>
        <hmd>室肉简装</hmd>
        <hmd className="main hmd" style={{ transform: 'scale(0.5)', color: '#a1a1a1', left:'400px' }}>1920*1080</hmd>
        </div>

        <div className="beda1">
        <img src={ss2} alt="" id="image12"/>
        <hmd className="main hmd" style={{left:'536px', top:'-1020px'}}>简約生卧装饰</hmd>
        <hmd className="main hmd" style={{ transform: 'scale(0.5)', color: '#a1a1a1', left:'676px', top: '-1020px'}}>1000*1000</hmd> 
        </div>

        <div className="beda2" style={{position: 'relative', left:'-300px', top: '-106px'}}>
        <img src={ss2} alt="" id="image12"/>
        <hmd className="main hmd" style={{left:'536px', top:'-1020px'}}>简約生卧装饰</hmd>
        <hmd className="main hmd" style={{ transform: 'scale(0.5)', color: '#a1a1a1', left:'676px', top: '-1020px'}}>1000*1000</hmd> 
        </div>
        <Link to="/home2"> 
        <button className="bedb1" style={{position:'relative', top:'-307px'}}>
        <img src={ss3} alt="" id="image13"/>
        <div className="hover-box"></div>
        <div className="hover-box2">
          <span className="hover-text">勞秀创作流水线</span>
        </div>
        <hmd className="main hmd" style={{left:'835px', top:'-1330px'}}>暖色装修凤榙</hmd>
        <hmd className="main hmd" style={{ transform: 'scale(0.5)', color: '#a1a1a1', left:'978px', top: '-1330px'}}>1000*1300</hmd> 
        </button>
        </Link>

        <div className="tree1" style={{position: 'relative', top:'-306px'}}>
        <img src={ss4} alt="" id="image14"/>
        <hmd className="main hmd" style={{left:'1140px', top:'-1709px'}}>冷色客厅概念图</hmd>
        <hmd className="main hmd" style={{ transform: 'scale(0.5)', color: '#a1a1a1', left:'1270px', top: '-1709px'}}>1500*500</hmd> 
        </div>

        <div className="bedb2" style={{position:'relative', top:'-520px', left:'-300px'}}>
        <img src={ss3} alt="" id="image13"/>
        <hmd className="main hmd" style={{left:'835px', top:'-1330px'}}>暖色装修凤榙</hmd>
        <hmd className="main hmd" style={{ transform: 'scale(0.5)', color: '#a1a1a1', left:'978px', top: '-1330px'}}>1000*1300</hmd> 
        </div>

        <div className="tree2" style={{position: 'relative', top:'-315px', left:'-900px'}}>
        <img src={ss4} alt="" id="image14"/>
        <hmd className="main hmd" style={{left:'1140px', top:'-1709px'}}>冷色客厅概念图</hmd>
        <hmd className="main hmd" style={{ transform: 'scale(0.5)', color: '#a1a1a1', left:'1270px', top: '-1709px'}}>1500*500</hmd> 
        </div>

        <div className="air2" style={{position:'relative', top:'-1475px', left:'600px'}}>
        <img src={ss1} id="image11"/>
        <hmd>室肉简装</hmd>
        <hmd className="main hmd" style={{ transform: 'scale(0.5)', color: '#a1a1a1', left:'400px' }}>1920*1080</hmd>
        </div>

        <div className="air3" style={{position:'relative', top:'-1457px', left:'600px'}}>
        <img src={ss1} id="image11"/>
        <hmd>室肉简装</hmd>
        <hmd className="main hmd" style={{ transform: 'scale(0.5)', color: '#a1a1a1', left:'400px' }}>1920*1080</hmd>
        </div>

        <div className="air4" style={{position:'relative', top:'-2058px', left:'900px'}}>
        <img src={ss1} id="image11"/>
        <hmd>室肉简装</hmd>
        <hmd className="main hmd" style={{ transform: 'scale(0.5)', color: '#a1a1a1', left:'400px' }}>1920*1080</hmd>
        </div>

        <div className="beda2" style={{position: 'relative', left:'600px', top: '-1855px'}}>
        <img src={ss2} alt="" id="image12"/>
        <hmd className="main hmd" style={{left:'536px', top:'-1020px'}}>简約生卧装饰</hmd>
        <hmd className="main hmd" style={{ transform: 'scale(0.5)', color: '#a1a1a1', left:'676px', top: '-1020px'}}>1000*1000</hmd> 
        </div>

      </main>
    </div>
    </>
  );
}

export default App1
