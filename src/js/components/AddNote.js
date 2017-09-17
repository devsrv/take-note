import React, { Component } from 'react';
import userlogo from '../../images/user.png';
import NProgress from 'nprogress';
import '../../../node_modules/nprogress/nprogress.css';

import randomId from './../randomId'; 

export default class AddNote extends Component{
	constructor(props)
	{
		super(props);
		this.state = {id:'', title:'', color:'#f7f7f9', description:''};
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

		let newNote = {id:randomId(), title:this.state.title, desc:this.state.description, color:this.state.color};
		this.props.onNoteAdd(newNote);

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
