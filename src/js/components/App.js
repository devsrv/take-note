import React, { Component } from 'react';

import './../../css/bootstrap-4/css/bootstrap.min.css';
import './../../css/style.css';
import './../../css/demo.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import './../../plugins/snackbar/snackbar.css';

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
            ],
            recentlyTrashed: false
        };

        this.handleNoteAdded = this.handleNoteAdded.bind(this);
        this.handleTrash = this.handleTrash.bind(this);
        this.handleStarred = this.handleStarred.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    handleNoteAdded(note)
    {
        this.setState(function(prevState, props) {
            let currnotes = prevState.activenotes;
            currnotes.unshift(note);
            return {activenotes: currnotes}    
        });
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
        
        const currThis = this;
        let snack = this.showSnackMsg(currThis);
        snack.then((data) => {setTimeout(() => {
            currThis.setState({recentlyTrashed:false});
        }, 3000)});
    }

    showSnackMsg(scopedThis)
    {
        return new Promise((resolve, reject) =>{
            try {
                scopedThis.setState({recentlyTrashed:true});
                resolve();
            }
            catch(err) {
                reject();
            }
        });
    }

    closeSnackbar(e)
    {
        e.preventDefault();
        this.setState({recentlyTrashed:false});
    }

    handleStarred(noteId)
    {
        const filterredNotes = this.state.activenotes.map(function(note){

            if(note.id === noteId)
            {
                note.starred = !note.starred;
            }
            
            return note;
        });
    
        this.setState({activenotes:filterredNotes});
    }

    render() {

        return (
            <div>
                <Header />

                <Contents>

                    <AddNote onNoteAdd={this.handleNoteAdded} />

                    <ListNotes notes={this.state.activenotes} isTrashed={this.handleTrash} isStarred={this.handleStarred} />

                    {this.state.recentlyTrashed?
                        <div id="snackbar" className="show-snackbar"><span>Note moved to trash</span> &nbsp;&nbsp;&nbsp;&nbsp; <a className="pull-right text-warning" href="#close" onClick={this.closeSnackbar}>close</a></div>
                        :
                        null
                    }
                    

                </Contents>

                <Footersection />
            </div>
        );
    }
}

export default App;
