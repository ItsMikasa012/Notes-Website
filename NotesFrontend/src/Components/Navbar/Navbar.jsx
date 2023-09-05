import { useState } from 'react';
import './Navbar.css'



const Navbar = () => {

  const [isActive, setIsActive] = useState(false);
  const colorPalette = ["#FBF0B2", "#FFC7EA", "#D8B4F8", "#CAEDFF", "#FFD1D1", "#FF9494", "#A076F9"];


  return (
    <div className='navbar'>
      <div className="addbuttondiv">
        <button className='addbutton' onClick={
          () => {
            setIsActive(!isActive);
          }
        }>
          <img src="/images/addbutton.svg" alt="" />
        </button>
      </div>
      {
        isActive && (<div className="color-buttons" >
        {
          colorPalette.map((color, index) => {
            return <div key={index} style={{backgroundColor:color}}></div>
          })
        }
      </div>
      )
      }
			<div className="usersystemdiv">
				<div className="brightnessbuttondiv">
					<button>
						<img src="/public/images/brightnessmodebutton.svg" alt="" />
					</button>
				</div>

				<div className="accountbuttondiv">
					<button>
						<img src="/public/images/useraccountbutton.svg" alt="" />
					</button>
				</div>
			</div>
    </div>
  );
};

export default Navbar;