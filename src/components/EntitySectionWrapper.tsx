import EntityCard from './EntityCard';
import Entity from '../types/Entity';
import styles from './EntitySectionWrapper.module.css';

interface IProps {
  data: Entity[];
  heading: string;
  isLoading?: boolean;
}

const EntitySectionWrapper = ({ data, heading, isLoading = false }: IProps) => {
  return (
    <>
      <div className={styles['entities__heading-container']}>
        <h2 className={styles['entities__heading']}>{heading}</h2>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles['entities__card-container']}>
          {data.map((entity: Entity) => (
            <EntityCard key={entity.agent_id} data={entity} />
          ))}
        </div>
      )}
    </>
  );
};

export default EntitySectionWrapper;
