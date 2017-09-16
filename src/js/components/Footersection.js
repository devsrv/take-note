import React from 'react';

export default function Footersection()
{
	return (
		<footer className="container-fluid footer text-center">
	        <div className="row">
	            <div className="col-md-8 offset-md-2">
	                <p className="pull-right text-white">
	                    <span>
	                        <i className="fa fa-twitter" aria-hidden="true"></i>
	                        <a href="https://twitter.com/srvrksh" rel="noopener noreferrer" target="_blank">@srvrksh</a>
	                    </span>
	                    
	                    <span className="ml-10">
	                        <i className="fa fa-github" aria-hidden="true"></i>
	                        <a href="https://github.com/devsrv" rel="noopener noreferrer" target="_blank">devsrv</a>
	                    </span>
	                </p>
	            </div>
	        </div>
	    </footer>
	);
}
