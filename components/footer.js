import React from 'react'
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer footer-black footer-big">
            <div className="container">
                <div className="content">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>About Us</h5>
                            <p>ipsum</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Social Feed</h5>
                            <div className="social-feed">
                                <div className="feed-line">
                                    <i className="fa fa-twitter"></i>
                                    <p>How to handle ethical disagreements with your clients.</p>
                                </div>
                                <div className="feed-line">
                                    <i className="fa fa-twitter"></i>
                                    <p>The tangible benefits of designing at 1x pixel density.</p>
                                </div>
                                <div className="feed-line">
                                    <i className="fa fa-facebook-square"></i>
                                    <p>A collection of 25 stunning sites that you can use for inspiration.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <hr/>
                    <ul className="float-left">
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
                    <div className="copyright float-right">
                        Copyright © <script>
                    </script> Titan-6 All Rights Reserved.
                    </div>
            </div>
        </footer>
    )
}

export default Footer
