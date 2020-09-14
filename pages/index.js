import  React, { useState } from 'react'
import Head from "next/head";
import Navbar from '../components/navbar'
import Header from "../components/header";
import SecondNav from "../components/secondNav";
import Featured from "../components/featured";
import Post from "../components/post";
import Side from "../components/side";
import PostList from "../components/PostList";


const REVIEW_DATA = [
    {
        "data": {
            "success": true,
            "results": {
                "payload": {
                    "id": "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
                    "title": "Apple Airpods",
                    "ratings": 8.9,
                    "optionalDescription": "",
                    "optionalImage": "https://images.unsplash.com/photo-1529346720291-0c190cc4c804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1748&q=80",
                    "reviewer": "Jack",
                    "created_at": "2011-10-05T14:48:00.000Z"
                }
            }
        }
    },
    {
        "data": {
            "success": true,
            "results": {
                "payload": {
                    "id": "1b9d6bcd-bbfd-4b2d-9b5d-ab4dfbbd3bed",
                    "title": "IGN Website",
                    "ratings": 8.9,
                    "optionalDescription": "",
                    "optionalImage": "https://www.ecodenomy.com/wp-content/uploads/2019/11/ign-logo.png",
                    "reviewer": "Jack",
                    "created_at": "2011-10-05T14:48:00.000Z"
                }
            }
        }
    },
    {
        "data": {
            "success": true,
            "results": {
                "payload": {
                    "id": "1b9d6bcd-bbfd-4b2d-9b5",
                    "title": "AMD Rx 590",
                    "ratings": 8.9,
                    "optionalDescription": "",
                    "optionalImage": "https://i.ytimg.com/vi/VRAPmwgMAbc/maxresdefault.jpg",
                    "reviewer": "Jack",
                    "created_at": "2011-10-05T14:48:00.000Z"
                }
            }
        }
    },
    {
        "data": {
            "success": true,
            "results": {
                "payload": {
                    "id": "1b9d6bcd-bbfd-4b2d",
                    "title": "Cafe Blu",
                    "ratings": 8.0,
                    "optionalDescription": "",
                    "optionalImage": "https://ran-s3.s3.amazonaws.com/panmedia.com.jm/s3fs-public/images/portfolio/cafe_blu_fb_cover-01.jpg",
                    "reviewer": "Jane",
                    "created_at": "2011-10-05T14:48:00.000Z"
                }
            }
        }
    }
]


export default function Home(props) {
    const [reviews, setReview] = useState(null)

// async function fetchReviews(reviewsList) {
//         const reviews = setReview(reviewsList)
//     console.log(reviews)
//     setReview(reviews)
// }
//
// fetchReviews(REVIEW_DATA).then(r => console.log(r))

  return (
      <div>

          <div className="container">
              <Header/>
              <SecondNav/>

              <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                  <div className="col-md-6 px-0">
                      <h1 className="display-4 font-italic">Title of a longer featured blog post</h1>
                      <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly
                          and efficiently about what’s most interesting in this post’s contents.</p>
                      <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue
                          reading...</a></p>
                  </div>
              </div>

              <Featured/>
          </div>
          <main className="container main">
              <div className="row">
                  <div className="col-md-8">
                      <h3 className="pb-4 mb-4 font-italic border-bottom">
                          From the Firehose
                      </h3>
                      <PostList reviews={props.reviews}/>
                      {/*// <!-- /.blog-post -->*/}


                      {/*// <!-- /.blog-post -->*/}

                      <nav className="blog-pagination">
                          <a className="btn btn-outline-primary" href="#">Older</a>
                          <a className="btn btn-outline-secondary disabled" href="#" tabIndex="-1"
                             aria-disabled="true">Newer</a>
                      </nav>

                  </div>

                  <Side/>

              </div>
              {/*// <!-- /.row -->*/}

          </main>
          {/*// <!-- /.container -->*/}


      </div>
  )
}
Home.getInitialProps = async () =>{
        const reviews = REVIEW_DATA
        // const reviews = await fetch('https://jsonplaceholder.typicode.com/todos')
        // console.log(reviews)
        return {
            reviews
        }
}
