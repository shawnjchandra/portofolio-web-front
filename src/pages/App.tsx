import type { Component, JSX } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import Navbar from '../components/Navbar/Navbar';
import Home from './Home';
import { Layout } from '../components/Layout';


const App: Component = () => {
  return (
    <Router root={Layout}>
      <Route path="/" component={Home} />
    </Router>
  );
};

export default App;