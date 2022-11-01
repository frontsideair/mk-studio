import { FC, JSXElementConstructor, MouseEventHandler } from 'react';
import s from './Arrow.module.css';
import cn from 'classnames';
interface ArrowProps {
  elementID?: string;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  element?: string;
}
const Arrow: FC<ArrowProps> = ({
  elementID = 'main',
  className,
  direction = 'down',
  element,
}) => {
  const onClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    const element = document.getElementById(elementID);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  const Element = element || ('a' as any);
  return (
    <Element
      href={`#${elementID}`}
      className={cn(className, s.root, {
        [s.left]: direction === 'left',
        [s.right]: direction === 'right',
        [s.up]: direction === 'up',
        [s.down]: direction === 'down',
      })}
      onClick={onClick}
    >
      <svg
        width="56"
        height="130"
        viewBox="0 0 56 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="28" cy="102" r="27" className={s.circle} strokeWidth="2" />
        <path
          className={s.path}
          d="M29 1V0H27V1H29ZM27.2929 114.707C27.6834 115.098 28.3166 115.098 28.7071 114.707L35.0711 108.343C35.4616 107.953 35.4616 107.319 35.0711 106.929C34.6805 106.538 34.0474 106.538 33.6569 106.929L28 112.586L22.3431 106.929C21.9526 106.538 21.3195 106.538 20.9289 106.929C20.5384 107.319 20.5384 107.953 20.9289 108.343L27.2929 114.707ZM27 1V114H29V1H27Z"
          fill={s.path}
        />
      </svg>
    </Element>
  );
};

export default Arrow;
