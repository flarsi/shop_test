import React from 'react';
import './Card.css';

const PromotionCard = ({ promotion, onClickComments }) => (
  <div className="promotion-card">
    <div className="promotion-card__background">
      <img
            src={promotion.imageUrl}
            alt={promotion.title}
            className="promotion-card__image"
      />
      <div className='promotion-card__description'>
        <p className='promotion-card__description-text'>{promotion.description}</p>
      </div>
    </div>
    

    <div className="promotion-card__info">
      <div className="promotion-card__footer">
      <h1 className="promotion-card__title">{promotion.title}</h1>
      <span className="promotion-card__price">$ {promotion.price}</span>
      </div>  
        <button
          className="promotion-card__comments-count"
          onClick={onClickComments}
        >
          {promotion.comments.length}{' '}
          {promotion.comments.length > 1 ? 'Comments' : 'Comment'}
        </button>
    </div>
  </div>
);

export default PromotionCard;
