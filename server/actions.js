import axios from 'axios'

const BASE_URL = 'http://localhost:3000'
// const REVIEW_DATA = [
//     {
//
//
//         "id": "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
//         "title": "Apple Airpods",
//         "ratings": 8.9,
//         "optionalDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n",
//         "optionalImage": "https://images.unsplash.com/photo-1529346720291-0c190cc4c804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1748&q=80",
//         "reviewer": "Jack",
//         "created_at": "2011-10-05T14:48:00.000Z"
//
//     },
//     {
//
//
//         "id": "1b9d6bcd-bbfd-4b2d-9b5d-ab4dfbbd3bed",
//         "title": "IGN Website",
//         "ratings": 8.9,
//         "optionalDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n",
//         "optionalImage": "https://www.ecodenomy.com/wp-content/uploads/2019/11/ign-logo.png",
//         "reviewer": "Jack",
//         "created_at": "2011-10-05T14:48:00.000Z"
//
//
//     },
//     {
//
//
//         "id": "1b9d6bcd-bbfd-4b2d-9b5",
//         "title": "AMD Rx 590",
//         "ratings": 8.9,
//         "optionalDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n",
//         "optionalImage": "https://i.ytimg.com/vi/VRAPmwgMAbc/maxresdefault.jpg",
//         "reviewer": "Jack",
//         "created_at": "2011-10-05T14:48:00.000Z"
//
//     },
//     {
//
//         "id": "1b9d6bcd-bbfd-4b2d",
//         "title": "Cafe Blu",
//         "ratings": 8.0,
//         "optionalDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n",
//         "optionalImage": "https://ran-s3.s3.amazonaws.com/panmedia.com.jm/s3fs-public/images/portfolio/cafe_blu_fb_cover-01.jpg",
//         "reviewer": "Jane",
//         "created_at": "2011-10-05T14:48:00.000Z"
//
//
//     }
// ]

const CATEGORY_DATA = [
    {
        id: 1, name: "Gaming",
    },
    {
        id: 2, name: "Software",
    },
    {
        id: 3, name: "Food",
    },
    {
        id: 4, name: "Restaurant",
    },
]


export const createReview = (review) => {
    review.id = Math.random().toString(36).substr(2, 7)
    review.created_at = new Date().toISOString()
    return axios.post(`${BASE_URL}/api/v1/reviews`, review).then(response => {
        response.data
    })
    // return new Promise((resolve, reject) => {
    //     // TODO: Use and improved mechanism to capture ID
    //     // Create ID for review
    //     review.id = Math.random().toString(36).substr(2, 7)
    //     REVIEW_DATA.push(review)
    //     setTimeout(() => {
    //         resolve(REVIEW_DATA)
    //     }, 200)
    // })
}


export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(CATEGORY_DATA)
        }, 200)
    })
}

/**
 * @name GET REVIEWS
 * @returns {Promise<unknown>}
 */
export const getReviews = () => {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(REVIEW_DATA)
    //     }, 200)
    // })
    return axios.get(`${BASE_URL}/api/v1/reviews`).then((response) => {
        return response.data
    })


}

export const getReviewID = (id) => {
    // return new Promise((resolve, reject) => {
    //     const reviewIndex = REVIEW_DATA.findIndex((review) => {
    //         return review.id === id
    //     })
    //     const review = REVIEW_DATA[reviewIndex]
    //     setTimeout(() => {
    //         resolve(review)
    //     }, 200)
    // })
    return axios.get(`${BASE_URL}/api/v1/reviews/${id}`).then((response) => {
        return response.data
    });
}
