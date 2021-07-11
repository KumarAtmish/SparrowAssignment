import React from 'react';
// import '../style/layout.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../../Components/Header/Header';

import Dashboard from '../../Components/Dashboard/Dashboard';
import MyRequests from '../../Components/MyRequests/MyRequests';
import MyTranscations from '../../Components/MyTranscations/MyTranscations';
import MyMedications from '../../Components/MyMedications/MyMedications';


export default function Layout() {
    return(
      <Router >
        <div className="resident_container">
          <div className="Sidebar_container"><Header /></div>
          <div className="Header_container">
            <main >
              <Route path='/dashboard' component={Dashboard} exact />
              <Route path='/my-requests' component={MyRequests} exact />
              <Route path='/my-transcations' component={MyTranscations} exact />
              <Route path='/my-medications' component={MyMedications} exact />
            </main>
           </div>
        </div>
      </Router>
    )
}