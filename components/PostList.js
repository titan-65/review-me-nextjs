import React, {Component} from 'react';
import Post from "./post";

class PostList extends Component {
    renderReview(reviews) {
        return (
            reviews.map((review, reviewIndex) =>{
                    const {payload} = review.data.results;
                    console.log(payload);
                    return (
                        <div className="card bmd-card-raised card-background" key={payload.id} style={{backgroundImage: `url(${payload.optionalImage})`}}>
                            <div className="card-body">
                                <h2 className="card-title">{payload.title}</h2>
                                <p className="card-description">{payload.created_at} by <a className="author" href="#">{payload.reviewer}</a></p>
                                <p className="card-description">{payload.optionalDescription}</p>
                                <p className="card-header-info">{payload.ratings}</p>
                            </div>
                        </div>
                    )
                })
        )
    }
    render() {
        console.log(this.props)
        const { reviews} = this.props;
        return (
            <div>
                {this.renderReview(reviews)}
            </div>
        );
    }
}

export default PostList;
