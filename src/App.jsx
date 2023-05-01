import './App.css'
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation } from "swiper";
import bg1 from "./assets/RectangleOne.png"
import bg2 from "./assets/RectangleTwo.png"
import sajek from "./assets/Sajek.png"
import sreemongol from "./assets/Sreemongol.png"
import sundorbon from "./assets/sundorbon.png"


function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;
  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };
  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };
  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };
  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  const textTitle1 = "You can set here variable name of this content, like this paragraph.";
  const textTitle2 = "You can also set here you won opinion.";
  const [url, setUrl] = useState(sajek);
  const [text, setText] = useState(textTitle1);

  const handleBackgroundImg = (imgUrl, text) => {
    setUrl(imgUrl);
    setText(text)
  }

  return (
    <div className='flex' style={{ backgroundImage: `url(${url})`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className='w-[50%]'>
        <h1 className='text-red-500 text-4xl font-bold'>{text}</h1>
      </div>
      <div className='w-[50%]'>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide style={{ backgroundImage: `url(${sajek})` }} onClick={() => handleBackgroundImg(bg1, textTitle1)}>Slide 1</SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${sreemongol})` }} onClick={() => handleBackgroundImg(bg2, textTitle2)}>Slide 2</SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${sundorbon})` }} onClick={() => handleBackgroundImg(bg1, textTitle1)}>Slide 3</SwiperSlide>
          <SwiperSlide style={{ backgroundImage: `url(${sajek})` }} onClick={() => handleBackgroundImg(bg2, textTitle2)}>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default App
