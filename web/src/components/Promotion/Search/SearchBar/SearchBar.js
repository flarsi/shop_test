import './SearchBar.css';

const SearchBar =({handleSort})=> {

    return (
    <div className='search__container'>
        <ul className='search__sort'>
            <button type="button" className="search__button" name="priceToHigh" onClick={handleSort}>
                Price Low to High
            </button>
            <button type="button" className="search__button" name="priceToLow" onClick={handleSort}>
                Price High to Low
            </button>
            <button type="button" className="search__button" name="popularity" onClick={handleSort}>
                Popular first
            </button>    
        </ul>
    </div>
    )
}

export default SearchBar;
