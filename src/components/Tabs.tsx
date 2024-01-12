import { useState } from 'react';
import { Tab } from '../types/Section';
import styles from './Tabs.module.css';

interface IProps {
  tabs: Tab[];
  cb: (tabVal: number) => void;
}

const Tabs = ({ tabs, cb }: IProps) => {
  const [section, setSection] = useState<number>(0);

  const tabChangeHandler = (tabVal: number) => {
    setSection(tabVal);
    cb(tabVal);
  };

  return (
    <>
      {tabs.map((tab: Tab) => (
        <button
          key={tab.section}
          className={`${styles['header__button']} ${
            section === tab.section && styles['header__button--active']
          }`}
          onClick={() => tabChangeHandler(tab.section)}
        >
          {tab.name}
        </button>
      ))}
    </>
  );
};

export default Tabs;
