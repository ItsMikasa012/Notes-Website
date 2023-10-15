import useState from 'react';
import Searchstyles from './SearchBar.module.css'



const Sidebar = () => {
  return (
    <div className={Searchstyles.searchbardiv}>
      <div className={Searchstyles.searchbar}>
        <input type="text" id='search_text' placeholder='Search Note'/>
      </div>
      <button className={Searchstyles.searchbtn}><img src="/images/Seach symbol.svg" width={30} alt="" /></button>
    </div>
  );
};

export default Sidebar;