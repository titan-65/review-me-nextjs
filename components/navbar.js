import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg">
            <div className="container-fluid">
                <Link href="/"><a className="navbar-brand">Review ME</a></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/reviews">
                                <a className="nav-link" aria-current="page">Reviews</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a className="nav-link" aria-current="page">About</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">
                                <a className="nav-link" aria-current="page">Contact</a>
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control mr-2" type="search" placeholder="Search"
                               aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
