import { Typography } from "@mui/material";
import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";

type AnimatedScoreProps = {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  subText?: string;
};

const AnimatedScore: React.FC<AnimatedScoreProps> = ({
  from = 0,
  to,
  duration = 1,
  delay = 0,
  subText
}) => {
  const [score, setScore] = useState(from);
  const scoreObj = useRef({ value: from });

  useEffect(() => {
    scoreObj.current.value = from;
    gsap.to(scoreObj.current, {
      duration,
      delay,
      value: to,
      roundProps: "value",
      onUpdate: () => {
        setScore(Math.round(scoreObj.current.value));
      },
      ease: "none"
    });
  }, [from, to, duration, delay]);

  return (
    <Typography variant="body1">
      {score}
      {subText}
    </Typography>
  );
};

export default AnimatedScore;
