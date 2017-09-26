import React, { Component } from 'react';
import userlogo from '../../images/user.png';
import NProgress from 'nprogress';
import '../../../node_modules/nprogress/nprogress.css';

import randomId from './../randomId'; 

/**
*error tooltip component
*/
function ErrTooltip(props)
{
	if(props.msg !== '')
	{
		return (
			<div className="tooltipx left"><span className="arrow"></span><span className="text">{props.msg}</span></div>
		);
	}

	return null;
}

export default class AddNote extends Component{
	constructor(props)
	{
		super(props);
		this.state = {title:'', color:'#f7f7f9', description:'', validationErr:false, validationMsg:''};
		this.handleAddNote = this.handleAddNote.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
	}

	validateNote(noteTitle='')
	{
		if(noteTitle === '' || noteTitle.length === 0)
		{
			this.setState({validationErr:true, validationMsg:'Oops! give some title'});
			return false;
		}

		this.setState({validationErr:false, validationMsg:''});
		return true;
	}

	wait(ms) 
	{
	  	return new Promise(resolve => setTimeout(resolve, ms));
	}

	async handleAddNote(e)
	{
		e.preventDefault();

		let valid = this.validateNote(this.state.title.trim());
		if(valid)
		{
			NProgress.set(0.4);
			await this.wait(200);
			NProgress.set(0.6);
			await this.wait(200);
			NProgress.set(0.7);
			await this.wait(100);


			const newNote = {
				id:randomId(), 
				title:this.state.title.trim(), 
				desc:this.state.description.trim(), 
				color:this.state.color,
				starred:false,
				active:true
			};
			this.props.onNoteAdd(newNote);

			//clear the fields
			this.setState({title:'', color:'#f7f7f9', description:''});

			NProgress.set(1.0);
		}

		//validation error occurred, stop execution
		return true;
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

	handleKeyUp(e)
	{
		let input = e.target.value;

		if(input.length > 0)
		{
			this.setState({validationErr:false, validationMsg:''});
			return true;
		}

		return false;
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
											  <input type="text" value={this.state.title} className="form-control" onChange={this.handleChange} onKeyUp={this.handleKeyUp} placeholder="Title*" />
												<ErrTooltip msg={this.state.validationMsg} />
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
