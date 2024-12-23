/* eslint-disable react/no-array-index-key */

import { Box, Button, Stack, styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import "swiper/css";

const BendSlider = styled(Box)`
  &.carousel {
    overflow-x: clip;
  }

  .swiper {
    padding: 5rem 0;
    overflow: visible;
    .swiper-slide {
      width: 400px;
    }
  }

  .single {
    position: relative;
    pointer-events: none;
    user-select: none;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    img {
      width: 100%;
      height: auto;
      vertical-align: top;
      border-radius: 8px;
      pointer-events: none;
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 2rem;

    .dot {
      width: 12px;
      height: 12px;
      margin: 0 8px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.3);
      cursor: pointer;
      transition: background-color 0.3s ease;

      &.active {
        background-color: black;
      }
    }
  }
`;

const multiplier = {
  translate: 0.1,
  rotate: 0.01
};

const Carousel: React.FC = () => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const swiperInstance = useRef<Swiper | null>(null);
  const [slides, setSlides] = useState<HTMLElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = 10;

  useEffect(() => {
    if (swiperRef.current) {
      swiperInstance.current = new Swiper(swiperRef.current, {
        slidesPerView: "auto",
        spaceBetween: 90,
        centeredSlides: true,
        loop: true,
        grabCursor: true,
        on: {
          slideChange: (swiper) => {
            setActiveIndex(swiper.realIndex);
          }
        }
      });
    }

    const calculateWheel = () => {
      slides.forEach((slide) => {
        if (!slide) return;

        const rect = slide.getBoundingClientRect();
        const r = window.innerWidth * 0.5 - (rect.x + rect.width * 0.5);
        let ty =
          Math.abs(r) * multiplier.translate -
          rect.width * multiplier.translate;

        if (ty < 0) {
          ty = 0;
        }
        const transformOrigin = r < 0 ? "left top" : "right top";
        slide.style.transform = `translate(0, ${ty}px) rotate(${
          -r * multiplier.rotate
        }deg)`;
        slide.style.transformOrigin = transformOrigin;
      });
    };

    const raf = () => {
      requestAnimationFrame(raf);
      calculateWheel();
    };
    raf();
  }, [slides]);

  const setSlideRef = (el: HTMLElement | null) => {
    if (el && !slides.includes(el)) {
      setSlides((prevSlides) => [...prevSlides, el]);
    }
  };

  const handleNext = () => {
    swiperInstance.current?.slideNext();
  };

  const handlePrev = () => {
    swiperInstance.current?.slidePrev();
  };

  const goToSlide = (index: number) => {
    swiperInstance.current?.slideToLoop(index);
    setActiveIndex(index);
  };

  return (
    <BendSlider className="carousel">
      <div className="swiper" ref={swiperRef}>
        <div className="swiper-wrapper">
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="swiper-slide">
              <div className="single" ref={setSlideRef}>
                <img
                  src={`https://picsum.photos/800/1200?random=${index + 1}`}
                  alt={`slide-${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Button className="nav-button prev" onClick={handlePrev}>
          Prev
        </Button>
        <div className="pagination">
          {Array.from({ length: slideCount }).map((_, index) => (
            <Box
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <Button className="nav-button next" onClick={handleNext}>
          Next
        </Button>
      </Stack>
    </BendSlider>
  );
};

export default Carousel;
