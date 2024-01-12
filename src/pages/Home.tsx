import Header from '../components/Header';
import Entities from '../components/Entities';
import styles from './Home.module.css';
import { useState } from 'react';
import ManageTeams from '../components/ManageTeams';
import { Section } from '../types/Section';

const showSection = (section: Section) => {
  switch (section) {
    case Section.Entity:
      return <Entities />;
    case Section.Manage:
      return <ManageTeams />;
  }
};

const Home = () => {
  const [section, setSection] = useState<Section>(Section.Entity);
  return (
    <div>
      <Header selectSection={setSection} />
      <div className={styles['home__content']}>{showSection(section)}</div>
    </div>
  );
};

export default Home;
