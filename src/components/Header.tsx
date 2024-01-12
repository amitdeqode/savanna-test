import { headerTabs } from '../constants/headerTabs';
import { Section } from '../types/Section';
import styles from './Header.module.css';
import Tabs from './Tabs';

interface IProps {
  selectSection: (tabVal: Section) => void;
}

const Header = ({ selectSection }: IProps) => {
  return (
    <header className={styles['header__container']}>
      <div className={styles['header__logoButton']}>
        <img src='savannaproject_logo.jpeg' className={styles['header__logo']} alt='logo' />
        <Tabs tabs={headerTabs} cb={selectSection} />
      </div>
      <img src='settings.svg' className={styles['header__settings-img']} alt='settings' />
    </header>
  );
};

export default Header;
