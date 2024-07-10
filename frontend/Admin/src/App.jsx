import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Rooms from './pages/Rooms';
import Bookings from './pages/Bookings';
import Guests from './pages/Guests';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/bookings" component={Bookings} />
          <Route path="/guests" component={Guests} />
          <Route path="/settings" component={Settings} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;