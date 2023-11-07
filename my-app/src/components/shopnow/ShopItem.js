import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from './shopData';

function ShopItem() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
  };

  return (
    <div className="overflow-hidden w-[80rem] relative">
      <Slider {...sliderSettings}>
        {data.map((item, index) => (
          <div key={index} className="text-center px-2">
            <img src={item.img} alt="Img" className="w-60 h-auto mx-auto" />
            <h1 className='w-56'>{item.text}</h1>
            <p className='text-red-600 font1'> {item.price} </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ShopItem;
