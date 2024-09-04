/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-multi-assign */
/* eslint-disable lines-between-class-members */
import { Box, styled } from "@mui/material";
import React, { useEffect, useRef } from "react";

const TerrainBox = styled(Box)`
  overflow: hidden;
  background-color: #000;
  color: #fff;
  width: 100%;
  height: 100%;

  canvas {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

interface StarProps {
  x: number;
  y: number;
}

class Star {
  size: number;
  speed: number;
  x: number;
  y: number;

  constructor({ x, y }: StarProps) {
    this.size = Math.random() * 2;
    this.speed = Math.random() * 0.1;
    this.x = x;
    this.y = y;
  }

  reset(width: number, height: number) {
    this.size = Math.random() * 2;
    this.speed = Math.random() * 0.1;
    this.x = width;
    this.y = Math.random() * height;
  }

  update(bgCtx: CanvasRenderingContext2D, width: number, height: number) {
    this.x -= this.speed;
    if (this.x < 0) {
      this.reset(width, height);
    } else {
      bgCtx.fillRect(this.x, this.y, this.size, this.size);
    }
  }
}

class ShootingStar {
  x: number;
  y: number;
  len: number;
  speed: number;
  size: number;
  waitTime: number;
  active: boolean;

  constructor(width: number) {
    this.x = Math.random() * width;
    this.y = 0;
    this.len = Math.random() * 80 + 10;
    this.speed = Math.random() * 10 + 6;
    this.size = Math.random() * 1 + 0.1;
    this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
    this.active = false;
  }

  reset(width: number) {
    this.x = Math.random() * width;
    this.y = 0;
    this.len = Math.random() * 80 + 10;
    this.speed = Math.random() * 10 + 6;
    this.size = Math.random() * 1 + 0.1;
    this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
    this.active = false;
  }

  update(bgCtx: CanvasRenderingContext2D, width: number, height: number) {
    if (this.active) {
      this.x -= this.speed;
      this.y += this.speed;
      if (this.x < 0 || this.y >= height) {
        this.reset(width);
      } else {
        bgCtx.lineWidth = this.size;
        bgCtx.beginPath();
        bgCtx.moveTo(this.x, this.y);
        bgCtx.lineTo(this.x + this.len, this.y - this.len);
        bgCtx.stroke();
      }
    } else if (this.waitTime < new Date().getTime()) {
      this.active = true;
    }
  }
}

const Terrain: React.FC = () => {
  const terrainRef = useRef<HTMLCanvasElement>(null);
  const backgroundRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const terrain = terrainRef.current;
    const background = backgroundRef.current;

    if (!terrain || !background) return;

    const terCtx = terrain.getContext("2d");
    const bgCtx = background.getContext("2d");

    if (!terCtx || !bgCtx) return;

    let width = window.innerWidth;
    let height = document.body.offsetHeight;
    height = height < 400 ? 400 : height;

    terrain.width = background.width = width;
    terrain.height = background.height = height;

    const points: number[] = [];
    let displacement = 140;
    const power = 2 ** Math.ceil(Math.log(width) / Math.log(2));

    points[0] = height - (Math.random() * height) / 2 - displacement;
    points[power] = height - (Math.random() * height) / 2 - displacement;

    for (let i = 1; i < power; i *= 2) {
      for (let j = power / i / 2; j < power; j += power / i) {
        points[j] =
          (points[j - power / i / 2] + points[j + power / i / 2]) / 2 +
          Math.floor(Math.random() * -displacement + displacement);
      }
      displacement *= 0.6;
    }

    terCtx.beginPath();
    for (let i = 0; i <= width; i++) {
      if (i === 0) {
        terCtx.moveTo(0, points[0]);
      } else if (points[i] !== undefined) {
        terCtx.lineTo(i, points[i]);
      }
    }

    terCtx.lineTo(width, terrain.height);
    terCtx.lineTo(0, terrain.height);
    terCtx.lineTo(0, points[0]);
    terCtx.fill();

    bgCtx.fillStyle = "#05004c";
    bgCtx.fillRect(0, 0, width, height);

    const entities: (Star | ShootingStar)[] = [];

    for (let i = 0; i < height; i++) {
      entities.push(
        new Star({ x: Math.random() * width, y: Math.random() * height })
      );
    }

    entities.push(new ShootingStar(width));
    entities.push(new ShootingStar(width));

    function animate() {
      if (!bgCtx) return;

      bgCtx.fillStyle = "#05004c";
      bgCtx.fillRect(0, 0, width, height);
      bgCtx.fillStyle = "#ffffff";
      bgCtx.strokeStyle = "#ffffff";

      entities.forEach((entity) => {
        if (entity instanceof Star) {
          entity.update(bgCtx, width, height);
        } else if (entity instanceof ShootingStar) {
          entity.update(bgCtx, width, height);
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = document.body.offsetHeight;
      height = height < 400 ? 400 : height;

      terrain.width = background.width = width;
      terrain.height = background.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <TerrainBox>
      <canvas id="bgCanvas" ref={backgroundRef} />
      <canvas id="terCanvas" ref={terrainRef} />
    </TerrainBox>
  );
};

export default Terrain;
