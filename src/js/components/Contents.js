import React from 'react';

export default function Contents(props)
{
    return (
        <div className="container-fluid">

            <div className="container">

                {props.children}

            </div>
        </div>
    );
}
