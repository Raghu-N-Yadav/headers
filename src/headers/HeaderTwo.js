import React from 'react'
import { Link } from 'react-router-dom'


export default function HeaderTwo() {
    return (

        <div className="container-fluid bg-light p-2">
            <div className="row">
                <div className="col offset-1">
                    <img src="https://img.icons8.com/office/480/000000/doom-logo.png" height="70px" />
                </div>
                <div className="col mt-3">

                    <Link to="/">Home</Link>
                </div>
            </div>
        </div>
    )
}
