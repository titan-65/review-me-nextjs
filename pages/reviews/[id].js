import { useRouter } from "next/router";
import {getReviewID} from "../../server/actions";

const Review = (props) => {
    const router = useRouter()
    const {id } = router.query
    const { review } = props
    return (
        <div>
            <div className="page-header header-filter header-small" data-parallax="true"
                 style={{backgroundImage: `url(${review.optionalImage})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 ml-auto mr-auto text-center">
                            <h2 className="title">{review.title}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section section-text">
                <div className="row">
                    <div className="col-md-8 ml-auto mr-auto">
                        <h3 className="title">{review.title}</h3>
                        <p className="blockquote">
                            <br/> <br/>
                            {review.optionalDescription}</p>
                        <div className="media-footer">
                            <a href="#pablo" className="btn btn-danger float-right">
                                <i className="material-icons">favorite</i> {review.ratings}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Review.getInitialProps = async ({query}) => {
    const review = await getReviewID(query.id)
    return {
        review
    }
}

export default Review
