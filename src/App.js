import './App.css';
import { Route, Router, Switch} from 'react-router-dom'
import { HomeTemplate } from './template/HomeTemplate/HomeTemplate';
import { LoginTemPlate } from 'template/LoginTemplate/LoginTemplate';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import {createBrowserHistory} from 'history'
import Loading from 'components/Loading/Loading';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import { clientRoutes } from 'routes';
import { adminRoutes } from 'routes';

export const history = createBrowserHistory()

function App() {

  const renderRouter = (routes, Layout) => {   
    return routes.map((route, index) => {
      const { path, exact , Component, isPrivate, isAdmin } = route
      return <Layout
        key={index}
        path = {path}
        exact = {exact}
        Component = {Component}
        isPrivate = {isPrivate}
        isAdmin = {isAdmin}
      />
    })
  }


  return (
    <Router history={history}>
      <Loading/>
      <Switch>     
        <LoginTemPlate path="/login" exact Component={Login}/>
        <LoginTemPlate path="/register" exact Component={Register}/>
        {renderRouter(clientRoutes, HomeTemplate)} 
        {renderRouter(adminRoutes, HomeTemplate)} 
        <Route  path="*" component={PageNotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
