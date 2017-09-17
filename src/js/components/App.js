import React, { Component } from 'react';

import './../../css/bootstrap-4/css/bootstrap.min.css';
import './../../css/style.css';
import './../../css/demo.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 

import Header from './Header';
import Footersection from './Footersection';
import Contents from './Contents';
import AddNote from './AddNote';
import ListNotes from './ListNotes';

class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {activenotes: [{title:`I'm a dummy title you can edit me`, desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'}]};
        this.handleNoteAdded = this.handleNoteAdded.bind(this);
    }

    handleNoteAdded(note)
    {
        this.setState((prevState, props) => ({
            activenotes: prevState.activenotes.concat([note])
        }));
    }

    render() {

        return (
            <div>
                <Header />

                <Contents>

                    <AddNote onNoteAdd={this.handleNoteAdded} />

                    <ListNotes notes={this.state.activenotes} />

                </Contents>

                <Footersection />
            </div>
        );
    }
}

export default App;
