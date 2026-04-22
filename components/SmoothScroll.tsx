import { Box, BoxProps, styled } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import Scrollbar from 'smooth-scrollbar';

interface ISmoothScrollProp extends BoxProps {
  className?: string;
  children?: React.ReactNode;
}

const options = {
  damping: 0.07,
};

const SmoothScroll: React.FC<ISmoothScrollProp> = ({ className, children, ...props }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scrollbar = Scrollbar.init(scrollRef.current, options);

    return () => {
      scrollbar.destroy();
    };
  }, []);

  return (
    <ScrollBox ref={scrollRef} className={className} {...props}>
      {children}
    </ScrollBox>
  );
};

export default SmoothScroll;

export const ScrollBox = styled(Box)`
  .scrollbar-track-y {
    width: 5px;

    .scrollbar-thumb {
      width: 5px;
      background-color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;
