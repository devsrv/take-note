import React, { Component } from 'react';

import './../../css/bootstrap-4/css/bootstrap.min.css';
import './../../css/style.css';
import './../../css/demo.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 

import Header from './Header';
import Footersection from './Footersection';
import Contents from './Contents';
import AddNote from './AddNote';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Contents>
          <AddNote></AddNote>
        </Contents>

        <Footersection />
      </div>
    );
  }
}

export default App;
