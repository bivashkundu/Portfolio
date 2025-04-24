/* eslint-disable consistent-return */
/* eslint-disable no-nested-ternary */

// "use client";

// import { Box, Button, styled } from "@mui/material";
// import React, { useEffect, useRef, useState } from "react";

// // Styled Components
// const SliderWrapper = styled(Box)`
//   position: relative;
//   width: 100%;
//   overflow: hidden;
// `;

// const SliderContainer = styled(Box)<{ speed: number }>`
//   display: flex;
//   transition: transform ${(props) => props.speed}ms ease-in-out;
// `;

// const Slide = styled(Box)<{ width: number }>`
//   flex: 0 0 ${(props) => props.width}%;
//   transition: flex 0.3s ease-in-out;

//   &:hover {
//     flex: 0 0 ${(props) => props.width + 5}%;
//   }

//   .items_box {
//     background: #f3f3f3;
//     border-radius: 8px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 120px;
//     font-size: 18px;
//     font-weight: bold;
//     margin: 1px;
//   }
// `;

// const NavButton = styled(Button)`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   z-index: 10;
//   background: #fff;
//   &:hover {
//     background: #ddd;
//   }
// `;

// const DotsContainer = styled(Box)`
//   display: flex;
//   justify-content: center;
//   margin-top: 10px;
// `;

// const Dot = styled(Box)<{ active: boolean }>`
//   width: 10px;
//   height: 10px;
//   margin: 5px;
//   background: ${(props) => (props.active ? "#333" : "#bbb")};
//   border-radius: 50%;
//   cursor: pointer;
// `;

// interface SliderSettings {
//   slidesToShow: number;
//   slidesToScroll: number;
//   infinite: boolean;
//   speed: number;
// }

// const originalSlides = [
//   { id: 1, content: "Item 1" },
//   { id: 2, content: "Item 2" },
//   { id: 3, content: "Item 3" },
//   { id: 4, content: "Item 4" },
//   { id: 5, content: "Item 5" }
// ];

// const sliderSettings: SliderSettings = {
//   slidesToShow: 6,
//   slidesToScroll: 1,
//   infinite: true,
//   speed: 500
// };

// const Flexgrowslider: React.FC = () => {
//   const { slidesToShow, slidesToScroll, infinite, speed } = sliderSettings;
//   const totalSlides = originalSlides.length;

//   // Clone slides for infinite effect
//   const clonedSlides = infinite
//     ? [
//         ...originalSlides.slice(-slidesToShow),
//         ...originalSlides,
//         ...originalSlides.slice(0, slidesToShow)
//       ]
//     : [...originalSlides];

//   const [currentIndex, setCurrentIndex] = useState(slidesToShow); // Start at first real slide
//   const [transitionEnabled, setTransitionEnabled] = useState(true);
//   const [slideWidth, setSlideWidth] = useState(100 / slidesToShow);
//   const sliderRef = useRef<HTMLDivElement | null>(null);

//   // Handle screen resize
//   useEffect(() => {
//     const updateWidth = () => setSlideWidth(100 / slidesToShow);
//     updateWidth();
//     window.addEventListener("resize", updateWidth);
//     return () => window.removeEventListener("resize", updateWidth);
//   }, [slidesToShow]);

//   // Handle infinite loop resets
//   useEffect(() => {
//     if (!transitionEnabled) return;

//     if (currentIndex >= totalSlides + slidesToShow) {
//       setTimeout(() => {
//         setTransitionEnabled(false);
//         setCurrentIndex(slidesToShow);
//       }, speed);
//     }

//     if (currentIndex <= 0) {
//       setTimeout(() => {
//         setTransitionEnabled(false);
//         setCurrentIndex(totalSlides);
//       }, speed);
//     }
//   }, [currentIndex, totalSlides, slidesToShow, speed, transitionEnabled]);

//   // Reset transition when looping back
//   useEffect(() => {
//     if (!transitionEnabled) {
//       setTimeout(() => setTransitionEnabled(true), 50);
//     }
//   }, [transitionEnabled]);

//   // Scroll slider function
//   const scrollSlider = (direction: "left" | "right") => {
//     if (!transitionEnabled) return;
//     const newIndex =
//       currentIndex + (direction === "left" ? -slidesToScroll : slidesToScroll);
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <SliderWrapper>
//       <NavButton sx={{ left: 0 }} onClick={() => scrollSlider("left")}>
//         ◀
//       </NavButton>

//       <Box sx={{ overflow: "hidden", width: "100%" }}>
//         <SliderContainer
//           ref={sliderRef}
//           speed={transitionEnabled ? speed : 0}
//           sx={{
//             transform: `translateX(-${currentIndex * slideWidth}%)`
//           }}
//         >
//           {clonedSlides.map((item, index) => (
//             <Slide key={index as number} width={slideWidth}>
//               <Box className="items_box">{item.content}</Box>
//             </Slide>
//           ))}
//         </SliderContainer>
//       </Box>

//       <NavButton sx={{ right: 0 }} onClick={() => scrollSlider("right")}>
//         ▶
//       </NavButton>

//       <DotsContainer>
//         {originalSlides.map((_, index) => (
//           <Dot
//             key={index as number}
//             active={currentIndex - slidesToShow === index}
//             onClick={() => setCurrentIndex(index + slidesToShow)}
//           />
//         ))}
//       </DotsContainer>
//     </SliderWrapper>
//   );
// };

// export default Flexgrowslider;

// "use client";

// import { Box, Button, styled } from "@mui/material";
// import React, { useEffect, useRef, useState } from "react";

// // Styled Components
// const SliderWrapper = styled(Box)`
//   position: relative;
//   width: 100%;
//   overflow: hidden;
// `;

// const SliderContainer = styled(Box)<{ speed: number }>`
//   display: flex;
//   transition: transform ${(props) => props.speed}ms ease-in-out;
// `;

// const Slide = styled(Box)<{ width: number; isHovered: boolean }>`
//   flex-grow: ${(props) => (props.isHovered ? 2 : 1)};
//   flex-shrink: 0;
//   width: ${(props) => props.width}%;
//   background: #f3f3f3;
//   border-radius: 8px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 120px;
//   font-size: 18px;
//   font-weight: bold;
//   transition: flex-grow 0.4s ease-in-out;
//   transform: ${(props) => (props.isHovered ? "scale(1.1)" : "scale(1)")};
// `;

// const NavButton = styled(Button)`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   z-index: 10;
//   background: #fff;
//   &:hover {
//     background: #ddd;
//   }
// `;

// const DotsContainer = styled(Box)`
//   display: flex;
//   justify-content: center;
//   margin-top: 10px;
// `;

// const Dot = styled(Box)<{ active: boolean }>`
//   width: 10px;
//   height: 10px;
//   margin: 5px;
//   background: ${(props) => (props.active ? "#333" : "#bbb")};
//   border-radius: 50%;
//   cursor: pointer;
// `;

// interface SliderSettings {
//   slidesToShow: number;
//   slidesToScroll: number;
//   infinite: boolean;
//   speed: number;
// }

// const originalSlides = [
//   { id: 1, content: "Item 1" },
//   { id: 2, content: "Item 2" },
//   { id: 3, content: "Item 3" },
//   { id: 4, content: "Item 4" },
//   { id: 5, content: "Item 5" }
// ];

// const sliderSettings: SliderSettings = {
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   infinite: true,
//   speed: 500
// };

// const Flexgrowslider: React.FC = () => {
//   const { slidesToShow, slidesToScroll, infinite, speed } = sliderSettings;
//   const totalSlides = originalSlides.length;

//   // Clone slides for infinite effect
//   const clonedSlides = infinite
//     ? [
//         ...originalSlides.slice(-slidesToShow),
//         ...originalSlides,
//         ...originalSlides.slice(0, slidesToShow)
//       ]
//     : [...originalSlides];

//   const [currentIndex, setCurrentIndex] = useState(slidesToShow);
//   const [transitionEnabled, setTransitionEnabled] = useState(true);
//   const [slideWidth, setSlideWidth] = useState(100 / slidesToShow);
//   const sliderRef = useRef<HTMLDivElement | null>(null);
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   // Handle screen resize
//   useEffect(() => {
//     const updateWidth = () => setSlideWidth(100 / slidesToShow);
//     updateWidth();
//     window.addEventListener("resize", updateWidth);
//     return () => window.removeEventListener("resize", updateWidth);
//   }, [slidesToShow]);

//   // Handle infinite loop resets
//   useEffect(() => {
//     if (!transitionEnabled) return;

//     if (currentIndex >= totalSlides + slidesToShow) {
//       setTimeout(() => {
//         setTransitionEnabled(false);
//         setCurrentIndex(slidesToShow);
//       }, speed);
//     }

//     if (currentIndex <= 0) {
//       setTimeout(() => {
//         setTransitionEnabled(false);
//         setCurrentIndex(totalSlides);
//       }, speed);
//     }
//   }, [currentIndex, totalSlides, slidesToShow, speed, transitionEnabled]);

//   // Reset transition when looping back
//   useEffect(() => {
//     if (!transitionEnabled) {
//       setTimeout(() => setTransitionEnabled(true), 50);
//     }
//   }, [transitionEnabled]);

//   // Scroll slider function
//   const scrollSlider = (direction: "left" | "right") => {
//     if (!transitionEnabled) return;
//     const newIndex =
//       currentIndex + (direction === "left" ? -slidesToScroll : slidesToScroll);
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <SliderWrapper>
//       <NavButton sx={{ left: 0 }} onClick={() => scrollSlider("left")}>
//         ◀
//       </NavButton>

//       <Box sx={{ overflow: "hidden", width: "100%" }}>
//         <SliderContainer
//           ref={sliderRef}
//           speed={transitionEnabled ? speed : 0}
//           sx={{
//             transform: `translateX(-${currentIndex * slideWidth}%)`
//           }}
//         >
//           {clonedSlides.map((item, index) => (
//             <Slide
//               key={index as number}
//               width={slideWidth}
//               isHovered={hoveredIndex === index}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               {item.content}
//             </Slide>
//           ))}
//         </SliderContainer>
//       </Box>

//       <NavButton sx={{ right: 0 }} onClick={() => scrollSlider("right")}>
//         ▶
//       </NavButton>

//       <DotsContainer>
//         {originalSlides.map((_, index) => (
//           <Dot
//             key={index as number}
//             active={currentIndex - slidesToShow === index}
//             onClick={() => setCurrentIndex(index + slidesToShow)}
//           />
//         ))}
//       </DotsContainer>
//     </SliderWrapper>
//   );
// };

// export default Flexgrowslider;

const flexgrowslider = () => {
  return <div>name</div>;
};

export default flexgrowslider;
