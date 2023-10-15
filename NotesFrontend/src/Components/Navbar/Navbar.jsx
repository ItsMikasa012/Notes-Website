import { useState } from 'react';
import style from './Navbar.module.css'



const Navbar = () => {

  const [isActive, setIsActive] = useState(false);
  const colorPalette = ["#FBF0B2", "#FFC7EA", "#D8B4F8", "#CAEDFF", "#FFD1D1", "#FF9494", "#A076F9"];


  return (
    <div className= {style.navbar}>
      <div className={style.addbuttondiv}>
        <button className={style.addbutton} onClick={
          () => {
            setIsActive(!isActive);
          }
        }>
          <img src="/images/addbutton.svg" alt="" />
        </button>
      </div>
      {
        isActive && (<div className={style.color_buttons} >
        {
          colorPalette.map((color, index) => {
            return <div key={index} style={{backgroundColor:color}}></div>
          })
        }
      </div>
      )
      }
			<div className={style.usersystemdiv}>
				<div className={style.brightnessbuttondiv}>
					<button>
						<img src="/images/brightnessmodebutton.svg" alt="" />
					</button>
				</div>

				<div className={style.accountbuttondiv}>
					<button>
						<img src="/images/useraccountbutton.svg" alt="" />
					</button>
				</div>
			</div>
    </div>
  );
};

export default Navbar;