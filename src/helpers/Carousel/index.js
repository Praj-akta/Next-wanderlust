import React from 'react';
import reviewerIcon from '../../assets/images/logo.png';
import './index.scss';

export default function Carousel() {
    return (
        <div id="multi-item-example" className="carousel slide">
            <div className="controls-top">
                <a className="carousel-prev" 
                    href="#multi-item-example" data-slide="prev">
                    {"<"}
                </a>
                <a className="carousel-next" 
                    href="#multi-item-example" data-slide="next">
                    {">"}
                </a>
            </div>
            <div className="carousel-inner d-flex reviews-list text-center mt-5" role="listbox">
                <div className="carousel-item active">
                    <div className="review px-5 py-4">
                        <img src={reviewerIcon} alt="reviewer-icon" />
                        <p className="text-secondary pb-3 review-description">
                            All I can say about my trip to Tarkarli is 
                            “AMAZING from start to finish”. The arrangements, the sights, 
                            the sounds (of the ocean), the photography, the team, the hotel, 
                            last but not the least the food.
                        </p>
                        <p>Harshada Kakade</p>
                        <p className="text-secondary">
                            Thane, Maharashtra
                        </p>
                    </div>
                    <div className="review px-5 py-4">
                        <img src={reviewerIcon} alt="reviewer-icon" />
                        <p className="text-secondary pb-3 review-description">
                            All I can say about my trip to Tarkarli is 
                            “AMAZING from start to finish”. The arrangements, the sights, 
                            the sounds (of the ocean), the photography, the team, the hotel, 
                            last but not the least the food.
                        </p>
                        <p>Manish Chaugule</p>
                        <p className="text-secondary">
                            Thane, Maharashtra
                        </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="review px-5 py-4">
                        <img src={reviewerIcon} alt="reviewer-icon" />
                        <p className="text-secondary pb-3 review-description">
                            All I can say about my trip to Tarkarli is 
                            “AMAZING from start to finish”. The arrangements, the sights, 
                            the sounds (of the ocean), the photography, the team, the hotel, 
                            last but not the least the food.
                        </p>
                        <p>Alex D'souza</p>
                        <p className="text-secondary">
                            Bandra, Maharashtra
                        </p>
                    </div>
                    <div className="review px-5 py-4">
                        <img src={reviewerIcon} alt="reviewer-icon" />
                        <p className="text-secondary pb-3 review-description">
                            All I can say about my trip to Tarkarli is 
                            “AMAZING from start to finish”. The arrangements, the sights, 
                            the sounds (of the ocean), the photography, the team, the hotel, 
                            last but not the least the food.
                        </p>
                        <p>Genelia D'souza</p>
                        <p className="text-secondary">
                            Mumbai, Maharashtra
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}