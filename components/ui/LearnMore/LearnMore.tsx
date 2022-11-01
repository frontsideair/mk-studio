import { FC } from 'react';
import Link from 'next/link';
import Arrow from '../Arrow';
import s from './LearnMore.module.css';
import cn from 'classnames';
interface LearnMoreProps {
  link?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}
const LearnMore: FC<LearnMoreProps> = ({
  link = '/',
  direction = 'right',
  className,
}) => {
  return (
    <Link href={link}>
      <a className={cn(s.root, className)}>
        <div className={s.root}>
          <span className={s.text}>Learn More</span>
          <Arrow element={`button`} direction={direction} />
        </div>
      </a>
    </Link>
  );
};

export default LearnMore;
