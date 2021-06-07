import React, { useState, useEffect } from 'react';

const RatingsReviews = () => {

  const [rating, setRating] = useState(4.25);
  const [percentage, setPercent] = useState(85);

  return (
    <div>
      <font class="rating"> {rating} </font>
      <div class="star-ratings-css">
        <div class="star-ratings-css-top" style={{
          color: 'black',
          width: percentage,
          padding: 0,
          position: 'absolute',
          'z-index': 1,
          display: 'block',
          top: 0,
          left: 0,
          overflow: 'hidden',
        }}
        ><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        <div class="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
      </div>
      <div>
        100% of reviews recommend this product
      </div>
      <div class='test'>
        <span class='reviewBarText'>5 stars</span> <progress value="70" max="100"></progress>
        <br/>
        <span class='reviewBarText'>4 stars</span> <progress value="33" max="100"></progress>
        <br/>
        <span class='reviewBarText'>3 stars</span> <progress value="99" max="100"></progress>
        <br/>
        <span class='reviewBarText'>2 stars</span> <progress value="8" max="100"></progress>
        <br/>
        <span class='reviewBarText'>1 stars</span> <progress value="0" max="100"></progress>
      </div>
      <div >
        Size
        <div>
          <input type="range" min="1" max="100" value="0" name="tooSmall"></input>
          <label htmlFor="tooSmall">Too Small</label>
        </div>
        Comfort
        <div>
          <label htmlFor="poor">Poor</label>
          <input type="range" min="1" max="100" value="55" name="poor"></input>
          <label htmlFor="poor">Perfect</label>
        </div>
      </div>
    </div>

  );
};

export default RatingsReviews;