/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, styled } from "@mui/material";
import React from "react";

const Slider = styled(Box)`
  background-color: slateblue;
  height: 100vh;
  display: grid;
  place-items: center;
  gap: 1rem;

  .carousel {
    --margin: 4rem;

    position: relative;
    width: min(35rem, 100% - 4rem);
    min-height: 30rem;
    margin-top: var(--margin);

    &__item {
      background-color: white;
      border-radius: 0.5rem;
      position: absolute;
      height: 80%;
      transform-origin: top;
      transition: all 1s cubic-bezier(0.28, 0.55, 0.385, 1.65);
      width: 100%;

      &:nth-child(1) {
        z-index: 6;
        top: 1rem;
        transform: scale(1.1);
        opacity: 0;
      }

      &:nth-child(2) {
        z-index: 5;
        top: 0;
        transform: scale(1);
        opacity: 1;
      }

      &:nth-child(3) {
        z-index: 4;
        top: -1rem;
        transform: scale(0.95);
        opacity: 0.8;
      }

      &:nth-child(4) {
        z-index: 4;
        top: -2rem;
        transform: scale(0.9);
        opacity: 0.7;
      }

      &:nth-child(n + 5) {
        z-index: 3;
        top: -3rem;
        transform: scale(0.8);
        opacity: 0;
      }
    }
  }

  @keyframes fade-out-back {
    from {
      transform: scale(0.5);
      opacity: 0;
    }
  }

  @keyframes fade-in-front {
    from {
      top: 1rem;
      transform: scale(1.2);
      opacity: 0;
    }
  }
`;

export default function slider() {
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (carouselRef.current) {
      const firstChild = carouselRef.current.firstElementChild as HTMLElement;
      const clone = firstChild.cloneNode(true) as HTMLElement;
      firstChild.remove();
      carouselRef.current.appendChild(clone);
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const lastChild = carouselRef.current.lastElementChild as HTMLElement;
      const clone = lastChild.cloneNode(true) as HTMLElement;
      lastChild.remove();
      carouselRef.current.prepend(clone);
    }
  };
  return (
    <Slider>
      <div className="carousel" ref={carouselRef}>
        <div className="carousel__item">1</div>
        <div className="carousel__item">2</div>
        <div className="carousel__item">3</div>
        <div className="carousel__item">4</div>
        <div className="carousel__item">5</div>
      </div>
      <div className="controls">
        <Button className="prev" onClick={handlePrev}>
          Prev
        </Button>
        <Button className="next" onClick={handleNext}>
          Next
        </Button>
      </div>
    </Slider>
  );
}
