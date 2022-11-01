import { FC, useEffect, useRef, useState } from 'react';
import s from './AnimatedBackgroundGrid.module.css';
import cn from 'classnames';
interface AnimatedBackgroundGridProps {
  bgWidth: number;
  bgHeight: number;
  direction?: 'up' | 'down';
}

const drawRandomSquares = ({
  ctx,
  x,
  y,
  squareColors,
  squareSize,
  borderWidth,
  randomQuotient,
}: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  squareColors: string[];
  squareSize: number;
  borderWidth: number;
  randomQuotient: number;
}) => {
  const randomColor =
    squareColors[
      Math.floor(Math.random() * squareColors.length * randomQuotient)
    ];
  ctx.fillStyle = randomColor;
  ctx.fillRect(
    x + borderWidth * 2,
    y + borderWidth * 2,
    squareSize,
    squareSize
  );
};
const squareColor = (opacity = 0.1) => `rgba(255, 255, 255, ${opacity})`;

const drawGrid = ({
  ctx,
  squareSize,
  borderWidth,
  squareColors,
  bgColor,
  numberOfSquares,
  width,
  height,
}: {
  ctx: CanvasRenderingContext2D;
  squareSize: number;
  borderWidth: number;
  squareColors: string[];
  bgColor: string;
  numberOfSquares: number;
  width: number;
  height: number;
}) => {
  ctx.fillStyle = 'rgb(43, 34, 114)';
  ctx.fillRect(0, 0, width, height);
  // console.log(numberOfSquares);
  Array.from({ length: numberOfSquares }).forEach((_, i) => {
    const x = Math.floor(i % Math.floor(width / squareSize)) * squareSize;
    const y = Math.floor(i / Math.floor(width / squareSize)) * squareSize;
    ctx.fillStyle = bgColor;
    // draw background squares with a border
    ctx.fillRect(
      x,
      y,
      squareSize + borderWidth * 2,
      squareSize + borderWidth * 2
    );

    if (i > numberOfSquares / 3 && i < numberOfSquares / 2) {
      drawRandomSquares({
        ctx,
        x,
        y,
        squareColors,
        squareSize,
        borderWidth,
        randomQuotient: 9,
      });
    } else if (i > numberOfSquares / 2 && i < (numberOfSquares / 3) * 2) {
      drawRandomSquares({
        ctx,
        x,
        y,
        squareColors,
        squareSize,
        borderWidth,
        randomQuotient: 2,
      });
    } else if (i > (numberOfSquares / 3) * 2) {
      drawRandomSquares({
        ctx,
        x,
        y,
        squareColors,
        squareSize,
        borderWidth,
        randomQuotient: 1,
      });
      drawRandomSquares({
        ctx,
        x,
        y,
        squareColors,
        squareSize,
        borderWidth,
        randomQuotient: 1,
      });
    }
    if (i > (numberOfSquares / 4) * 3.25) {
      ctx.fillStyle = squareColor(0.05);
      ctx.fillRect(x + borderWidth, y + borderWidth, squareSize, squareSize);
    }
  });
};

const drawBoard = ({
  ref,
  width,
  height,
}: {
  ref: React.MutableRefObject<HTMLCanvasElement | null>;
  width: number;
  height: number;
}) => {
  if (!ref?.current) return;
  const canvas = ref.current;
  const ctx = canvas?.getContext('2d');
  const bgColor = 'rgb(43, 34, 114)';
  if (!ctx) return;
  const squareColors = [
    bgColor,
    squareColor(0.1),
    squareColor(0.075),
    squareColor(0.05),
    squareColor(0.0015),
  ];
  const squareSize = 17;
  const borderWidth = 1;
  const numberOfSquares = Math.floor(
    (width / squareSize) * (height / squareSize)
  );
  // console.log(width, height);
  drawGrid({
    ctx,
    squareSize,
    borderWidth,
    squareColors,
    bgColor,
    numberOfSquares,
    width,
    height,
  });
};

const starAnimation = ({
  ref,
  width,
  height,
}: {
  ref: React.MutableRefObject<HTMLCanvasElement | null>;
  width: number;
  height: number;
}) => {
  requestAnimationFrame(starAnimation as any);
  drawBoard({ ref, width, height });
};

const stopAnimation = ({
  ref,
  width,
  height,
}: {
  ref: React.MutableRefObject<HTMLCanvasElement | null>;
  width: number;
  height: number;
}) => {
  cancelAnimationFrame(starAnimation as any);
  drawBoard({ ref, width, height });
};
const AnimatedBackgroundGrid: FC<AnimatedBackgroundGridProps> = ({
  bgWidth,
  bgHeight,
  direction = 'up',
}) => {
  const [width, setWidth] = useState(bgWidth);
  const [height, setHeight] = useState(bgHeight);
  const ref = useRef<HTMLCanvasElement>(null);
  const speed = 200;
  let tick: NodeJS.Timer | null = null;
  const handleResize = () => {
    setWidth(innerWidth || ref.current?.clientWidth || width);
    setHeight(ref.current?.clientHeight || height);
  };

  const handleMosueEnter = () => {
    // starAnimation({ ref, width, height });
    // tick();
    console.log('enter');

    tick = setInterval(() => {
      drawBoard({ ref, width, height });
    }, speed);
  };
  const handleMouseOut = () => {
    // stopAnimation({ ref, width, height });
    console.log('out');

    clearInterval(tick as NodeJS.Timer);
  };
  //   const numberOfSquares = (width / 17) * (height / 17);
  useEffect(() => {
    drawBoard({ ref, width, height });
    window.addEventListener('resize', handleResize);
  }, [width, height]);

  return (
    <div
      className={cn(s.root, {
        [s.up]: direction === 'up',
        [s.down]: direction === 'down',
      })}
    >
      <canvas
        ref={ref}
        className={s.canvas}
        width={width}
        height={height}
        onMouseEnter={handleMosueEnter}
        onMouseOut={handleMouseOut}
      />
    </div>
  );
};

export default AnimatedBackgroundGrid;
