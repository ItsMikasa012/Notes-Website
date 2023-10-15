import { useState } from 'react';
import Notesstyles from './NoteSection.module.css'
const NoteSection = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isAdd, setisAdd] = useState(false);

  const handleView = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <div className= {Notesstyles.note_section_div}>
      <button className={Notesstyles.notes_card_overlay} onClick={handleView}>
      <div className= {Notesstyles.notes_card}>
        <div className= {Notesstyles.title}>
          <h2>ithu than title</h2>
        </div>
        <div className= {Notesstyles.content}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas rerum voluptate qui vitae ea doloremque laboriosam, natus error laborum, aliquam porro at dignissimos aut, esse quisquam quis numquam odio consequatur! </div>
      </div>
      </button>
      {
        isOpen && <div className= {Notesstyles.modal} onClick={!isAdd && handleView}>
          <div className= {Notesstyles.modal_card} onClick={(e) => {
            e.stopPropagation();
          }}>
            <div className={Notesstyles.first_part}>
              <input type="text" placeholder='Title'/>
              <button className={Notesstyles.x_btn} onClick={handleView}>
                <img src="/images/Close_Button.svg" width={20} alt="" />
              </button>
            </div>
            <textarea name="content" id="content" cols="35" rows="15" placeholder='Enter content'></textarea>
            { !isAdd && <div className={Notesstyles.btn_div}>
              <button>Save</button>
              <button>Delete</button>
            </div>
            }

            {
              isAdd && <div className={Notesstyles.btn_div}>
              <button>Add</button>
              <button onClick={handleView}>Cancel</button>
            </div>
            }
          </div>
        </div>
      }
    </div>
  );
};

export default NoteSection;