import { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import NoteSection from '../../Components/NoteSection/NoteSection';
import styles from './NotesPages.module.css';
import style from ""

const NotesPages = () => {

  const [selectedColor, setSelectedColor] = useState("");

  const handleAdd = (color) =>{
      console.log(color)
  }

  return (
    <div className= {styles.notes}>
      <Navbar />
    <div className="">
      <SearchBar />
      <NoteSection />
    </div>
    </div>
  );
};

export default NotesPages;