import Entity from '../types/Entity';
import { removeUnderscore } from '../utils/textFormat';
import styles from './EntityCard.module.css';

interface IProps {
  data: Entity;
}

const EntityCard = ({ data: { image, name, snippet } }: IProps) => {
  return (
    <div className={styles['card__container']}>
      <img src={image} alt={name} className={styles['card__img']} />
      <div className={styles['card__details']}>
        <h3 className={styles['card__heading']}>{removeUnderscore(name)}</h3>
        <p className={styles['card__desc']}>{snippet}</p>
      </div>
    </div>
  );
};

export default EntityCard;
