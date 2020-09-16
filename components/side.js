import React from 'react'
import { useRouter } from "next/router"
import Modal from "./modal";
import ReviewForm from "./reviewCreateForm"
import {createReview} from "../server/actions"

const Side = () => {

    const router = useRouter()
    const handleCreateReview = async (review) => {
       const createdReview = await createReview(review)
        await router.push('/reviews')
        console.log(JSON.stringify(createdReview))
    }
    return (
        <aside className="col-md-4">
            <hr/>
            <div className="col-md-12">
                <ReviewForm onSubmit={handleCreateReview}/>

            </div>
            <div className="p-4 mb-3 bg-light rounded">
                <h4 className="font-italic">About</h4>
                <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis
                    consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            </div>
            <div className="p-4">
                <h4 className="font-italic">Elsewhere</h4>
                <ol className="list-unstyled">
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Facebook</a></li>
                </ol>
            </div>
        </aside>
    );
};

export default Side;
