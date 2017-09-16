import React, { Component } from 'react';
import userlogo from '../../images/user.png';
import NProgress from 'nprogress';
import '../../../node_modules/nprogress/nprogress.css'; 

import Note from './Note';

let notes = [{title:'my title', desc:'my desc'}];

export default class AddNote extends Component{
	constructor(props)
	{
		super(props);
		this.state = {title:'', color:'#f7f7f9', description:''};
		this.handleAddNote = this.handleAddNote.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	wait(ms) 
	{
	  	return new Promise(resolve => setTimeout(resolve, ms));
	}

	async handleAddNote(e)
	{
		e.preventDefault();
		NProgress.set(0.4);
		await this.wait(1000);

		let newNote = {title:this.state.title, desc:this.state.description};
		notes.push(newNote);

		console.log(notes);

		NProgress.set(1.0);
	}

	handleChange(e)
	{
		let field = null;
		field = e.target.type;
		let input = e.target.value;

		switch(field) 
		{
		    case 'text':
		        this.setState({title:input});
		        break;
		    case 'color':
		        this.setState({color:input});
		        break;
		    default:
		        this.setState({description:input});
		}
	}

	render()
	{
		return (
			<section className="add-task">
					<div className="row">
					  	<div className="col-md-6 mb offset-md-3">
					        <div className="message-p">
								<div className="message-header">
									<h5>Add a New Task</h5>
								</div>

								<div className="row">
									<div className="col-md-3 centered hidden-sm hidden-xs">
									  	<img src={userlogo} className="img-circle" alt="user logo" width="65" />
									</div>

									<div className="col-md-9 form-box">
									  
										<form onSubmit={this.handleAddNote}>
											<div className="form-group">
											  <input type="text" value={this.state.title} className="form-control" onChange={this.handleChange} placeholder="Title*" />
											</div>

											<div className="form-group">
											    <input type="color" value={this.state.color} onChange={this.handleChange} />
											    <small> optionally select color for the task</small>
											</div>

											<div className="form-group">
											  <textarea value={this.state.description} className="form-control" onChange={this.handleChange} placeholder="Enter description here"></textarea>
											</div>

											<button type="submit" className="sent-btn">Save</button>
										</form>
									</div>

								</div>
					    </div>
					</div>
				</div>
			</section>
		);
	}
}

export function ListTrash()
{
	return(
		<div className="desc">
			<div className="thumb">
				<span className="badge"><i className="fa fa-clock-o"></i></span>
			</div>
			<div className="details">
				<p>
					<strong>Lorem ipsum task title . .</strong>
					<br/>
					removed at 3sec ago<br/>
				</p>
			</div>
        </div>
	);
}

export function EmptyTrash()
{
	return(
		<div className="empty-trash">
			<div className="text-center">
				<h3>Trash box empty</h3>
			</div>
        </div>
	);
}

export class ListNotes extends Component{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		const activenotes = notes.map((note, index) =>
	      	<Note key={index} title={note.title} desc={note.desc} />
	    );

		return(
			<section className="task-list">
                <div className="row">
                    <div className="col-md-8">

                        <div className="row">
                            <div className="col-md-12">
                                <input type="search" name="search" placeholder="Search.." />
                            </div>
                        </div>
                        <br/>
                        
                        {activenotes}

                    </div>

                    <div className="col-md-4 activity scrollbar" id="bar">
                        <h4 className="centered">RECOVER DELETED TASKS</h4>

                        <EmptyTrash />

                        <ListTrash />

                    </div>
                    <div className="clearfix"></div>
                </div>
            </section>
		);
	}
}
