import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderOne() {
    return (
        <div id="head1" className="container-fluid bg-light p-2">
            <div className="row">
                <div className="col offset-1">
                    <img src="https://img.icons8.com/office/480/000000/doom-logo.png" height="70px" />
                </div>
                <div className="col mt-3">
                    <div className="row">
                        <div className="col-sm-4">
                            <Link to="/">Home</Link>
                        </div>
                        <div className="col-sm-4">
                            <div class="dropdown">
                                <span class="dropdown-toggle" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown button
                                </span>
                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item active" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div class="dropdown">
                                <span class="dropdown-toggle" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown button
                                </span>
                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item active" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
