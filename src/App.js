import './App.css';
import { Route, Switch} from 'react-router-dom'
import Dashboard from 'pages/admin/dashboard/Dashboard';

function App() {
  return (
    <>
      <Switch>
        <Route path="/admin/:page" component={Dashboard}/>
      </Switch>
    </>
  );
}

export default App;
