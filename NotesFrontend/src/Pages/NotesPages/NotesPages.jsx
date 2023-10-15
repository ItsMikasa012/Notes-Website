import { useState } from "react";
import styles from "./NotesPages.module.css";
import style from "../../Components/Navbar/Navbar.module.css";
import Searchstyles from "../../Components/SearchBar/SearchBar.module.css";
import Notesstyles from "../../Components/NoteSection/NoteSection.module.css";
import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: "dadasdadwiaohfa;lkfna;lksndandlkas",
    title: "hello",
    cont: "dakjksgd",
    color: "#D8B4F8",
  },
  {
    id: "dsadnasbdlkjashdjklashjklddasjjda",
    title: "hello2",
    cont: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero debitis voluptatibus eligendi fugit velit! Perspiciatis molestiae ducimus ex placeat ea reiciendis minima dolores impedit rem nemo! Rem corporis ex nemo.",
    color: "#FBF0B2",
  },
  {
    id: "dsfkjhasdjasdasdadsdshdkajhdmsjha",
    title: "hello3",
    cont: "dakjksgd",
    color: "#A076F9",
  },
];

const NotesPages = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAdd, setisAdd] = useState(false);
  const colorPalette = [
    "#FBF0B2",
    "#FFC7EA",
    "#D8B4F8",
    "#CAEDFF",
    "#FFD1D1",
    "#FF9494",
    "#A076F9",
  ];
  const handleAdd = (color) => {
    setSelectedColor(color);
    setisAdd(!isAdd);
    setIsOpen(!isOpen);
  };

  const handelDelete = () => {};

  const handleAddnote = () => {
    data.push({
      id: uuidv4(),
      title: title,
      color: selectedColor,
      cont: content,
    });
    setContent("");
    setTitle("");
    setSelectedColor("");
    setIsOpen(!isOpen);
    setisAdd(!isAdd);
  };

  const handleOverlay = () => {
    setIsOpen(!isOpen);
    setisAdd(false);
    setContent("");
    setTitle("");
    setSelectedColor("");
  };

  const handleView = (item) => {
    setisAdd(false);
    setIsOpen(!isOpen);
    setId(item.id);
    setTitle(item.title);
    setContent(item.cont);
    setSelectedColor(item.color);
  };

  return (
    <div className={styles.notes}>
      <div className={style.navbar}>
        <div className={style.addbuttondiv}>
          <button
            className={style.addbutton}
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <img src="/images/addbutton.svg" alt="" />
          </button>
        </div>
        {isActive && (
          <div className={style.color_buttons}>
            {colorPalette.map((color, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    handleAdd(color);
                  }}
                  style={{ backgroundColor: color }}
                ></div>
              );
            })}
          </div>
        )}
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
      <div className="">
        <div className={Searchstyles.searchbardiv}>
          <div className={Searchstyles.searchbar}>
            <input type="text" id="search_text" placeholder="Search Note" />
          </div>
          <button className={Searchstyles.searchbtn}>
            <img src="/images/Seach symbol.svg" width={30} alt="" />
          </button>
        </div>
        <div className={Notesstyles.note_section_div}>
          {data.map((item, index) => {
            return (
              <button
                key={index}
                className={Notesstyles.notes_card_overlay}
                onClick={() => {
                  handleView(item);
                }}
              >
                <div
                  className={Notesstyles.notes_card}
                  style={{ backgroundColor: item.color }}
                >
                  <div className={Notesstyles.title}>
                    <h2>{item.title}</h2>
                  </div>
                  <div className={Notesstyles.content}>{item.cont}</div>
                </div>
              </button>
            );
          })}
          {isOpen && (
            <div
              className={Notesstyles.modal}
              onClick={!isAdd && handleOverlay}
            >
              <div
                className={Notesstyles.modal_card}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                style={{ backgroundColor: selectedColor }}
              >
                <div className={Notesstyles.first_part}>
                  <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                  <button className={Notesstyles.x_btn} onClick={handleOverlay}>
                    <img src="/images/Close_Button.svg" width={20} alt="" />
                  </button>
                </div>
                <textarea
                  name="content"
                  id="content"
                  cols="35"
                  rows="15"
                  placeholder="Enter content"
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                ></textarea>
                {!isAdd && (
                  <div className={Notesstyles.btn_div}>
                    <button>Save</button>
                    <button>Delete</button>
                  </div>
                )}

                {isAdd && (
                  <div className={Notesstyles.btn_div}>
                    <button onClick={handleAddnote}>Add</button>
                    <button onClick={handleOverlay}>Cancel</button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesPages;
