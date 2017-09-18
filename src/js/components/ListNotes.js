import React, { Component } from 'react';
import Note from './Note';

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

export default class ListNotes extends Component{
	constructor(props)
	{
		super(props);
		this.noteTrashed = this.noteTrashed.bind(this);
	}

	noteTrashed(noteId)
	{
		this.props.isTrashed(noteId);
	}

	render()
	{
		const scopeThis = this;

		const activenotes = this.props.notes.map(function(note)
	      	{
	      		if(note.active)
	      		{
	      			return <Note key={note.id} noteId={note.id} title={note.title} desc={note.desc} color={note.color} starred={note.starred} onTrashed={scopeThis.noteTrashed} />
	      		}
	      		return null;
	      	}
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
