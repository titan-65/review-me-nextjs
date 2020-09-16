import  React, { useState } from 'react'
import Head from "next/head";
import Navbar from '../components/navbar'
import Header from "../components/header";
import SecondNav from "../components/secondNav";
import Featured from "../components/featured";
import Post from "../components/post";
import Side from "../components/side";
import PostList from "../components/PostList";
import {getCategories, getReviews} from "../server/actions";
import PageHeader from "../components/pageHeader";





export default function Home(props) {
    const [reviews, setReview] = useState(null)

// async function fetchReviews(reviewsList) {
//         const reviews = setReview(reviewsList)
//     console.log(reviews)
//     setReview(reviews)
// }
//
// fetchReviews(REVIEW_DATA).then(r => console.log(r))
const randomURL = 'https://source.unsplash.com/random'
    const homeTitle = 'REVIEW me'
  return (
      <div>
          <PageHeader url={randomURL} title={homeTitle}/>
          <div className="container" style={{marginTop: 10}}>
              {/*<div className="p-4 p-md-5 mb-4 text-white rounded bg-dark" style={{backgroundImage: `url('https://images.unsplash.com/photo-1600105351321-29a058a6096f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2081&q=80')`}}>*/}
              {/*    <div className="col-md-6 px-0">*/}
              {/*        <h1 className="display-4 font-italic">Title of a longer featured blog post</h1>*/}
              {/*        <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly*/}
              {/*            and efficiently about what’s most interesting in this post’s contents.</p>*/}
              {/*        <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue*/}
              {/*            reading...</a></p>*/}
              {/*    </div>*/}
              {/*</div>*/}

              <Featured/>
          </div>
          <main className="container main">
              <SecondNav categories={props.categories}/>
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
        const reviews = await getReviews()
        const categories = await getCategories()
        // const reviews = await fetch('https://jsonplaceholder.typicode.com/todos')
        // console.log(reviews)
        return {
            reviews,
            categories
        }
}
