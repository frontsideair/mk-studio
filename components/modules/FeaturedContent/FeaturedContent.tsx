import { FC, useEffect, useRef, useState } from 'react';
import s from './FeaturedContent.module.css';
import cn from 'classnames';
import LearnMore from '@components/ui/LearnMore';
import AnimatedBackgroundGrid from '@components/common/AnimatedBackgroundGrid';
interface FeaturedContentProps {
  title?: string;
  link?: string;
  description?: string;
  content?: {
    title: string;
    description: string;
  }[];
}
const FeaturedContent: FC<FeaturedContentProps> = ({
  title,
  link,
  description,
  content,
}) => {
  const [elementHeight, setElementHeight] = useState(458);
  const [elementWidth, setElementWidth] = useState(1367);
  const ref = useRef<HTMLDivElement>(null);
  const numberOfItems = content?.length || 0;
  console.log('ref height', ref.current?.clientHeight);

  const handleResize = () => {
    setElementWidth(innerWidth || ref.current?.clientWidth || elementWidth);
    setElementHeight(ref.current?.clientHeight || elementHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    setElementHeight(ref.current?.clientHeight ?? 394);
    setElementWidth(ref.current?.clientWidth ?? innerWidth);
  }, [
    elementHeight,
    elementWidth,
    ref.current?.clientHeight,
    ref.current?.clientWidth,
  ]);

  return (
    <div className={s.root} ref={ref}>
      <AnimatedBackgroundGrid bgWidth={elementWidth} bgHeight={elementHeight} />
      <div className={cn(s.content, 'lg:grid-cols-4')}>
        <div className={cn(s.highlight, 'lg:col-span-1')}>
          {title && <h2 className={s.heading}>{title}</h2>}
          {description && <p>{description}</p>}
          {link && (
            <>
              <LearnMore className={s.learMore} link={link} direction="right" />
            </>
          )}
        </div>
        <ol className={cn(s.ol, 'lg:col-span-3', 'lg:grid', 'lg:grid-cols-3')}>
          {content?.map((item, i) => (
            <li className={s.item} key={item.title}>
              <h3 className={s.h3}>
                <span className={s.subHeading}>{item.title}</span>
              </h3>
              <p className={s.description}>{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default FeaturedContent;
