import React from 'react';
import PromotionCard from '../Card/Card';

import './List.css';
import { Loader } from 'components/Loader/Loader';

const PromotionList = ({ loading, error, promotions }) => {

  if (error) {
    return <div>Something went wrong</div>;
  }
  if (loading) {
    return <Loader/>;
  }

  if (promotions.length === 0) {
    return <div>No results found</div>;
  }

  return (
    <div className="promotion-list">
      {promotions.map((promotion) => (
        <PromotionCard
          key={promotion.id}
          promotion={promotion}
        />
      ))}
      {loading && <Loader/>}
    </div>
  );
};

export default PromotionList;
