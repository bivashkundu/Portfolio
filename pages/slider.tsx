/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, styled } from "@mui/material";
import Image from "next/image";
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

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      /* 
      &:nth-child(1) {
        z-index: 6;
        top: 3rem;
        right: 1rem;
        transform: translateX(-5rem);
        opacity: 0;
      } */

      &:nth-child(1) {
        z-index: 5;
        top: 1rem;
        right: 3rem;
        opacity: 1;
      }

      &:nth-child(2) {
        z-index: 4;
        top: -2rem;
        right: 0;
        transform: scale(0.95);
        opacity: 1;
      }

      &:nth-child(3) {
        z-index: 3;
        top: -4rem;
        right: -3rem;
        transform: scale(0.9);
        opacity: 1;
        /* animation: fade-in-right 1s; */
      }

      &:nth-child(n + 4) {
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
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fade-in-right {
    from {
      transform: translateX(-2rem);
      transform: scale(0.9);
    }
    to {
      transform: translateX(0);
      transform: scale(0.9);
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
        <div className="carousel__item">
          <Image
            src="https://images.unsplash.com/photo-1724805053809-3c09736b2ade?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/"
            alt="img"
            width={400}
            height={400}
          />
        </div>
        <div className="carousel__item">
          <Image
            src="https://images.unsplash.com/photo-1724781598192-19bed9bffab0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img"
            width={400}
            height={400}
          />
        </div>
        <div className="carousel__item">
          {" "}
          <Image
            src="https://images.unsplash.com/photo-1721332149267-ef9b10eaacd9?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img"
            width={400}
            height={400}
          />
        </div>
        {/* <div className="carousel__item">
          <Image
            src="https://images.unsplash.com/photo-1724781598192-19bed9bffab0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img"
            width={400}
            height={400}
          />
        </div> */}
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
