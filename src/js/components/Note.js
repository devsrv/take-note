import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';

export default class Note extends Component{
	constructor(props)
	{
		super(props);
		this.state = {title:this.props.title, color:this.props.color, desc:this.props.desc};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e)
	{
		this.setState({title: e.target.value});
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
								<i className="fa fa-star-o" aria-hidden="true"></i>
								<span className="pull-right">
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
