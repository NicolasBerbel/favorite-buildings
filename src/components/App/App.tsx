import React from 'react';
import AppTheme from './AppTheme';
import Layout from '../Layout';
import { BuildingsList } from '../Building';
import { BuildingsProvider } from '../../contexts/BuildingsContext';

const App : React.FC = () => {

  return (
    <BuildingsProvider>
      <AppTheme>
        <Layout>
          <BuildingsList />
        </Layout>
      </AppTheme>
    </BuildingsProvider>
  );
}

export default App;
