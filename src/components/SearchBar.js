import "./ComponentStyle.css";
import searchIcon from "../assets/icons/search.svg";
function SearchBar() {
  return (
    <>
      <div className="search-area">
        <div className="logo"></div>
        <div className="search-box">
          <input className="search-bar" />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default SearchBar;
