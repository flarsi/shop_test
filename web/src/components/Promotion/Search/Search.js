import React, { useEffect } from 'react';

import PromotionList from '../List/List';
import './Search.css';
import SearchBar from './SearchBar/SearchBar';
import SideBar from './SideBar/SideBar';
import { useDispatch, useSelector  } from 'react-redux';
import { fetchPromotions } from 'redux/promotions.thunk';
import { getError, getLoading, getParams, getPromotions, getTotal} from 'redux/selectors';
import { colorChange, maxPriceChange, minPriceChange, orderChange, pageChange, searchChange, sortChange } from 'redux/params.slice';


const PromotionSearch = () => {

  const dispatch = useDispatch();
  const promotions = useSelector(getPromotions);
  const loading = useSelector(getLoading);
  const total = useSelector(getTotal);
  const error = useSelector(getError);
  const params = useSelector(getParams);
  const {page, search} = params;

  

  function sortBy(evt) {
    const {name} = evt.target;
    if (name === 'priceToHigh') {
      dispatch(sortChange('price'));
      dispatch(orderChange('asc'));
      return
    } 
    if (name === 'priceToLow') {
      dispatch(sortChange('price'));
      dispatch(orderChange('desc'));
      return
    }
    dispatch(sortChange('name'));
    dispatch(orderChange('desc'));
  }

  function sortByColor(evt) {
    const {value} = evt.target;
    dispatch(colorChange(value));
  }
  
  useEffect(() => {
    dispatch(fetchPromotions(params))
  }, [params, dispatch])

  function handleSetPrice(evt) {
    const {name, value} = evt.target;
    if (name === 'min') {
      dispatch(minPriceChange(value));
    } if (name === 'max') {
      dispatch(maxPriceChange(value));
    }
  }

  function fetchMore() {
    const newPage = page + 1;
    console.log(newPage)
    dispatch(pageChange(newPage));
  }

  return (
    <div className="promotion-search">
      <div className="promotion-search__container">
      <header className="promotion-search__header">
        <h1>Top SNEAKERS Shop</h1>
      </header>
      <input
        type="search"
        className="promotion-search__input"
        placeholder="Find"
        value={search}
        onChange={(ev) => dispatch(searchChange(ev.target.value))}
      />
      </div>
        <div className='secondary-container'>
          <SideBar total={total} setPrice={handleSetPrice} setColor={sortByColor}/>
          <div className='secondary-container-new'>
            <SearchBar handleSort={sortBy}/>        
            <PromotionList
              promotions={promotions}
              loading={loading}
              error={error}
            />
            {promotions &&
              !loading &&
              promotions?.length < ((total + promotions?.length) - (page * 4))&& 
              <button type='button' className='load__button' onClick={fetchMore}>Next page</button>
            }
          </div>
        </div>

    </div>
  );
};

export default PromotionSearch;
