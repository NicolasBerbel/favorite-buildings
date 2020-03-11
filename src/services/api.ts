import axios from 'axios';
import { IBuilding } from '../components/Building'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '',
});

export interface IBuildingsResponse {
  buildings: IBuilding[],
  total: number,
  page: number,
  total_pages: number,
}

export default api;