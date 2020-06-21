import React, { Component } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNabar'
import BookList from './components/BookList'
import {Provider} from 'react-redux';
import {Container} from 'reactstrap';
import store from './ReduxApi/Store';
import AddBookModal from './components/AddBookModal';

export class App extends Component {
  render() {
    return (
     <Provider store={store}>
        <AppNavbar/>
        <Container>
        <AddBookModal/>
        <BookList/>
        </Container>
     </Provider>
    )
  }
}

export default App
