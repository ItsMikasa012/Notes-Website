import useState from 'react';
import styles from './SearchBar.module.css'



const Sidebar = () => {
  return (
    <div className={styles.searchbardiv}>
      <div className={styles.searchbar}>
        <input type="text" id='search_text' placeholder='Search Note'/>
      </div>
      <button className={styles.searchbtn}><img src="/images/Seach symbol.svg" width={30} alt="" /></button>
    </div>
  );
};

export default Sidebar;