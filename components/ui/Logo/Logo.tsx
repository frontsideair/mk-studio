import s from './Logo.module.css';
import Link from 'next/link';
interface LogoProps {
  className?: string;
}
const Logo = ({ className }: LogoProps) => {
  return (
    <Link href={'/'}>
      <a className={className}>
        <div className={s.root}>
          <span>Monkey</span>
          <span>Kode</span>
        </div>
      </a>
    </Link>
  );
};
export default Logo;
