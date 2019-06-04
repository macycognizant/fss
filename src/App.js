import React from 'react';
import './App.css';
import { Route, HashRouter } from 'react-router-dom'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme/theme'
import Login from './pages/login'
import SalesZone from './pages/salesZone'
import Dashboard from './pages/dashboard'

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <HashRouter basename='/'>
        <div className='App'>
          <Route exact path='/' component={Login} />
          <Route exact path='/salesZone' component={SalesZone} />
          <Route exact path='/dashboard' component={Dashboard} />
        </div>
      </HashRouter>
    </MuiThemeProvider>
  );
}

export default App;
