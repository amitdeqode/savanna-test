import { useEffect, useState } from 'react';
import Entity from '../types/Entity';
import { get } from '../utils/apiService';
import { entitiesUrl } from '../constants/urls';

const useFetchEntities = () => {
  const [entities, setEntities] = useState<Entity[]>([]);
  const [isLoadingEntities, setIsLoadingEntities] = useState(false);

  const fetchData = async () => {
    setIsLoadingEntities(true);
    const entities = await get(entitiesUrl);
    setIsLoadingEntities(false);
    setEntities(entities);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { entities, isLoadingEntities };
};

export default useFetchEntities;
