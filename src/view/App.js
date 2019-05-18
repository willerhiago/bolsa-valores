import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';

import {BrowserRouter} from 'react-router-dom'
import Main from './components/Main'
import Routes from './components/Routes'

function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <Main/>
      <Routes></Routes>
      <NotificationContainer/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
