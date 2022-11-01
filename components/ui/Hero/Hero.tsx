import { FC } from 'react';
import Arrow from '../Arrow';
import s from './Hero.module.css';
interface HeroProps {
  title: string;
  height?: string;
  animation?: boolean;
}

const Hero: FC<HeroProps> = ({
  title,
  height = '676px',
  animation = false,
}) => {
  return (
    <div className={s.root} style={{ height }}>
      <div className={s.content}>
        <h1 className={s.title}>{title}</h1>
        <Arrow />
      </div>
    </div>
  );
};

export default Hero;
