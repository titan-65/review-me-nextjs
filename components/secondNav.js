import React from 'react'
import Link from 'next/link'

const SecondNav = (props) => {
    const { categories } = props
    return (
        <div>
            <div className="nav-scroller py-1 mb-2">
                <nav className="nav nav-pills nav-pills-rose d-flex justify-content-between">
                {categories.map((category, index) =>{
                    return (
                            <Link href="#" key={category.id}>
                                <a className="p-3 nav-link" href="#" >{category.name}</a>
                            </Link>
                    )
                })}
                </nav>
            </div>
        </div>
    )
}

export default SecondNav
