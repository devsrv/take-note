import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';

export default class Note extends Component{
	constructor(props)
	{
		super(props);
		this.state = {
			title:this.props.title, 
			color:this.props.color, 
			desc:this.props.desc, 
			starred:this.props.starred,
			active:this.props.active
		};

		this.handleChange = this.handleChange.bind(this);
		this.starToggle = this.starToggle.bind(this);
		this.trashNote = this.trashNote.bind(this);
	}

	handleChange(e)
	{
		this.setState({title: e.target.value});
	}

	starToggle()
	{
		this.setState((prevState, props) => ({starred: ! prevState.starred}));
	}

	trashNote()
	{
		this.props.onTrashed(this.props.noteId);
	}

	render()
	{
		return(
			<div className="col-md-6 card-box">
                <div className="card">
                    <div className="card-header" style={{background:this.state.color}}>
						<div className="row">
							<div className="col-md-9">
								<h5>
									<ContentEditable html={this.state.title} disabled={false} onChange={this.handleChange} />
								</h5>
							</div>
							<div className="col-md-3">
								<span className="star" onClick={this.starToggle}>
									{this.state.starred?
										<i className="fa fa-star starred" aria-hidden="true"></i>
										:
										<i className="fa fa-star-o" aria-hidden="true"></i>
									}
								</span>
								<span className="pull-right delete" onClick={this.trashNote}>
									<i className="fa fa-trash-o" aria-hidden="true"></i>
								</span>
							</div>
						</div>
                    </div>

                    <div className="card-block">
                        <p className="card-text">{this.state.desc}</p>
                    </div>
                </div>
            </div>
		);
	}
}
