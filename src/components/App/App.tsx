import React from 'react';
import AppTheme from './AppTheme';
import Layout from '../Layout';
import { IBuilding, BuildingsList } from '../Building';
import api from '../../services/api';

interface BuildingsResponse {
  buildings: IBuilding[],
  total: number,
  page: number,
  total_pages: number,
}

const App : React.FC = () => {
  const [buildings, setBuildings] = React.useState<IBuilding[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    setLoading(true);
    api.get<BuildingsResponse>('/buildings')
      .then(res => setBuildings(res.data.buildings))
      .catch(err => setError('An error occured during the buildings request, please try again later!'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <AppTheme>
      <Layout>
        { loading ? 'Loading...' : (
          !!error ? error : <BuildingsList buildings={buildings} />
        )}
      </Layout>
    </AppTheme>
  );
}

export default App;
