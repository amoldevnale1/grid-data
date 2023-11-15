import Grid from '../DataGrid/Grid';
import SearchPanel from '../SearchPanel/SearchPanel';
import './Dashboard.css';

function Dashboard() {
  return (
    <div>
      <SearchPanel />
      <Grid />
    </div>
  );
}

export default Dashboard;
