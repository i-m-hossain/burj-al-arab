import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import AuthProvider from './components/Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Food from './components/Food/Food';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Switch>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/book/:bedType">
            <Book />
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/foods">
            <Food></Food>
          </PrivateRoute>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
