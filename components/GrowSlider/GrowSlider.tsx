// "use client";

// import { Box, Button, styled } from "@mui/material";
// import React, { useState } from "react";

// // Styled Components
// const SliderWrapper = styled(Box)`
//   position: relative;
//   width: 100%;
//   overflow: hidden;
// `;

// const SliderContainer = styled(Box)<{ translateX: number }>`
//   display: flex;
//   gap: 5px;
//   transition: transform 0.5s ease-in-out;
//   transform: translateX(${(props) => props.translateX}%);
// `;

// const Slide = styled(Box)<{ isHovered: boolean }>`
//   flex: ${(props) => (props.isHovered ? 3 : 1)};
//   transition: flex 0.3s ease-in-out;

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

// // Props Interface
// interface SliderProps {
//   slides: { id: number; content: string }[];
//   dots?: boolean;
//   infinite?: boolean;
//   slidesToShow?: number;
//   slidesToScroll?: number;
// }

// const GrowSlider: React.FC<SliderProps> = ({
//   slides,
//   dots = true,
//   infinite = true,
//   slidesToShow = 1,
//   slidesToScroll = 1
// }) => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const totalSlides = slides.length;
//   const translateX = -(currentIndex * (100 / slidesToShow));

//   // Scroll slider function (Next/Prev)
//   const scrollSlider = (direction: "left" | "right") => {
//     setCurrentIndex((prevIndex) => {
//       const newIndex =
//         direction === "left"
//           ? prevIndex - slidesToScroll
//           : prevIndex + slidesToScroll;

//       if (infinite) {
//         return (newIndex + totalSlides) % totalSlides;
//       } else {
//         return Math.max(0, Math.min(newIndex, totalSlides - slidesToShow));
//       }
//     });
//   };

//   return (
//     <SliderWrapper>
//       <NavButton sx={{ left: 0 }} onClick={() => scrollSlider("left")}>
//         ◀
//       </NavButton>

//       <Box sx={{ overflow: "hidden", width: "100%" }}>
//         <SliderContainer translateX={translateX}>
//           {slides.map((item, index) => (
//             <Slide
//               key={item.id}
//               isHovered={hoveredIndex === index}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <Box className="items_box">{item.content}</Box>
//             </Slide>
//           ))}
//         </SliderContainer>
//       </Box>

//       <NavButton sx={{ right: 0 }} onClick={() => scrollSlider("right")}>
//         ▶
//       </NavButton>

//       {dots && (
//         <DotsContainer>
//           {slides.map((_, index) => (
//             <Dot
//               key={index as number}
//               active={currentIndex === index}
//               onClick={() => setCurrentIndex(index)}
//             />
//           ))}
//         </DotsContainer>
//       )}
//     </SliderWrapper>
//   );
// };

// export default GrowSlider;

const GrowSlider = () => {
  return <div>name</div>;
};

export default GrowSlider;
