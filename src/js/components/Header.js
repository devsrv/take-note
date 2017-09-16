import React from 'react';
import logo from './../../images/logo.svg';

export default function Header()
{
	return (
		<div className="jumbotron jumbotron-fluid headerbox">
		    <div className="container">
		        <h1 className="display-3">My To-do List <img id="loading" src={logo} alt="react logo" width="100" /></h1>
		        <p className="lead">a simple React JS approach of todo list app</p>
		    </div>
		</div>
	);
}
