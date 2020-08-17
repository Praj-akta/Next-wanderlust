import React, { useState } from 'react';
import filledStars from '../../assets/images/filled-stars.png';
import borderedStars from '../../assets/images/borderedStars.png';
import './index.scss';

const RatingStars = () => {
    const [rating, setRating] = useState(null);

    return (
        <div className="rating-stars-component">
            {
                [...Array(5)].map((stars, index) => {
                    const ratingValue = index + 1;

                    return (
                        <label key={index}>
                            <input 
                                type="radio" 
                                name="rating" 
                                value={ratingValue} 
                                onClick={_ => setRating(ratingValue)}
                            />
                            <img 
                                alt="rating-stars"
                                className="mr-2 stars"
                                src={ratingValue <= rating ? filledStars : borderedStars}
                            />
                        </label>
                    );
                })
            }
        </div>
    )
}

export default RatingStars;