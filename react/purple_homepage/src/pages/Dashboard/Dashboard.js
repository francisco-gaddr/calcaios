import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setData, setLoading, setError } from '../../redux/slices/dashboardSlice';
import './Dashboard.css';

function Dashboard() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.dashboard);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        // Simulated API call
        const response = await axios.get('https://api.example.com/data');
        dispatch(setData(response.data));
      } catch (err) {
        dispatch(setError('Failed to fetch data'));
      } finally {
        dispatch(setLoading(false));
      }
    };

    // For now, set some dummy data instead of making the API call
    dispatch(setData([
      { id: 1, name: 'Dataset 1', status: 'Analyzed' },
      { id: 2, name: 'Dataset 2', status: 'Pending' },
    ]));
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="upload-section">
        <h2>Upload Data</h2>
        <button className="btn primary">Upload File</button>
      </div>
      <div className="data-list">
        <h2>Your Datasets</h2>
        {data.map((item) => (
          <div key={item.id} className="data-item">
            <span>{item.name}</span>
            <span className="status">{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard; 