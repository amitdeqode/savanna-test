import SectionWrapper from './EntitySectionWrapper';
import { moderatorData } from '../mockData/demoModeratorsData';
import useFetchEntities from '../hooks/useFetchEntities';

const Entities = () => {
  const { entities, isLoadingEntities } = useFetchEntities();

  return (
    <div>
      <SectionWrapper data={entities} heading='Entities' isLoading={isLoadingEntities} />
      <SectionWrapper data={moderatorData} heading='Moderators' />
    </div>
  );
};

export default Entities;
