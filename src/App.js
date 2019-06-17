import React from 'react';
import './App.css';
import { Route, HashRouter } from 'react-router-dom'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme/theme'
import Login from './pages/Login'
import SalesZone from './pages/SalesZone'
import Dashboard from './pages/Dashboard'
import Barcode from './pages/Barcode'
import FindIt from './pages/FindIt'

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <HashRouter basename='/'>
        <div className='App'>
          <Route exact path='/' component={Login} />
          <Route exact path='/findIt' component={FindIt} />
          <Route exact path='/salesZone' component={SalesZone} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/barcode' component={Barcode} />
        </div>
      </HashRouter>
    </MuiThemeProvider>
  );
}

export default App;
