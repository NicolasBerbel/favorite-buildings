import React from 'react';
import { buildingsStore } from '../../contexts/BuildingsContext';
import api, {IBuildingsResponse} from '../../services/api';
import MuiPagination from '@material-ui/lab/Pagination';

export const Pagination : React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const {state, dispatch} = React.useContext(buildingsStore);
  const { pageNumber, pages, loading } = state;
  const page = pages[pageNumber]

  React.useEffect(() => {
    dispatch({type: 'request'});

    api.get<IBuildingsResponse>('/buildings', { params: { page: currentPage }})
      .then(
        res => dispatch({type: 'success', response: res.data}),
        () => dispatch({type: 'failure', error: 'An error occured during the buildings request, please try again later!'})
      );
  }, [currentPage, dispatch])

  const handleChange = (e : React.SyntheticEvent, v : number) => setCurrentPage(v);

  return (!page ? null :
    <MuiPagination disabled={loading} size="small" count={page?.total_pages} page={currentPage} onChange={handleChange} />
  )
}

export default Pagination;
