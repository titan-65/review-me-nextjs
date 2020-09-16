import React, {Component} from 'react';
import Link from 'next/link'
import Post from "./post";

class PostList extends Component {
    renderReview(reviews) {
        return (
            reviews.map((review) =>{
                    const {title, id, created_at, optionalImage, optionalDescription, ratings, reviewer} = review;
                    return (
                        <div className="card bmd-card-raised card-background" key={id} style={{backgroundImage: `url(${optionalImage})`}}>
                            <div className="card-body">
                                <h2 className="card-title">{title}</h2>
                                <p className="card-description">{created_at} by <a className="author" href="#">{reviewer}</a></p>
                                <p className="card-description">{optionalDescription}</p>
                                <p className="card-header-info">{ratings}</p>
                                <Link href="/reviews/[id]" as={`/reviews/${id}`}>
                                    <a href="#pablo" className="btn btn-warning btn-round">
                                        <i className="material-icons">subject</i> Review
                                    </a>
                                </Link>
                            </div>
                        </div>
                    )
                })
        )
    }
    render() {
        const { reviews} = this.props;
        return (
            <div>
                {this.renderReview(reviews)}
            </div>
        );
    }
}

export default PostList;
