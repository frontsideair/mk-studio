import s from './Footer.module.css';
const Footer = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Monkey Kode</p>
    </footer>
  );
};

export default Footer;
