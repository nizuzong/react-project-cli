import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.less';

const CardItem = (nextProps) => {
  const history = useHistory();
  const [cardLisd, setCardLisd] = useState([]);
  useEffect(() => {
    if (nextProps.card) {
      setCardLisd(nextProps.card)
    };
  });

    return (
      <div className="card_box">
        <ul className="card_item">
          {cardLisd &&
            cardLisd.map((res, key) => {
              return (
                <li key={key}>
                  <img src={res.coverUrl} />
                  <div>
                    <h3>{res.title}</h3>
                    <p>{res.message}</p>
                    <a onClick={() => history.push(`/productDetail/${res.id}`)}>查看详情</a>
                    <a className="card_right">立即体验</a>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
  )
};

export default CardItem;
