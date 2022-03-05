import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="container-fluid bg-light p-3">
            <div className="row">

                <div className="col offset-2">
                    <Link to="/pageone">Pageone</Link>

                </div>
                <div className="col">
                    <Link className='view over' to="/pagetwo">Pagetwo</Link>
                </div>
            </div>
        </div>
    )
}
