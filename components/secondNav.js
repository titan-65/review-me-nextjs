import React from 'react'

export default function SecondNav () {
    return (
        <div className="nav-scroller py-1 mb-2">
            <nav className="nav nav-pills nav-pills-rose d-flex justify-content-between">
                <a className="p-3 nav-link active" href="#">World</a>
                <a className="p-3 nav-link active" href="#">U.S.</a>
                <a className="p-3 nav-link active" href="#">Technology</a>
            </nav>
        </div>
    )
}
