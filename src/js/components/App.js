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
import randomId from './../randomId';

class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            activenotes: [
                {
                    id:randomId(), 
                    title:`I'm a dummy title you can edit me`, 
                    desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod', 
                    color:'#f7f7f9',
                    starred:true,
                    active:true
                }
            ]
        };
        this.handleNoteAdded = this.handleNoteAdded.bind(this);
        this.handleTrash = this.handleTrash.bind(this);
    }

    handleNoteAdded(note)
    {
        this.setState(function(prevState, props) {
            let currnotes = prevState.activenotes;
            currnotes.unshift(note);
            return {activenotes: currnotes}    
        });

        console.log(this.state.activenotes);
    }

    handleTrash(noteId)
    {
        const filterredNotes = this.state.activenotes.map(function(note){

            if(note.id === noteId)
            {
                note.active = false;
            }
            
            return note;
        });
    
        this.setState({activenotes:filterredNotes});

        console.log(filterredNotes);
    }

    render() {

        return (
            <div>
                <Header />

                <Contents>

                    <AddNote onNoteAdd={this.handleNoteAdded} />

                    <ListNotes notes={this.state.activenotes} isTrashed={this.handleTrash} />

                </Contents>

                <Footersection />
            </div>
        );
    }
}

export default App;
