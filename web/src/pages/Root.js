import React from 'react';
import { Provider } from "react-redux";

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import PagesPromotionSearch from './Promotion/Search/Search';
import { store } from 'redux/store';

const Root = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PagesPromotionSearch/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
};

export default Root;

