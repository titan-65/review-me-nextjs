
// const { createServer } = require('http')
// const { parse } = require('url')
const next = require('next')
const express = require('express')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const filePath = './data.json'
const fs = require('fs')
const path = require('path')
const reviewData = require(filePath)


app.prepare().then(() => {
    // NEXT.js Custom Server
    // createServer((req, res) => {
    //     // Be sure to pass `true` as the second argument to `url.parse`.
    //     // This tells it to parse the query portion of the URL.
    //     const parsedUrl = parse(req.url, true)
    //     const { pathname, query } = parsedUrl
    //
    //     if (pathname === '/a') {
    //         app.render(req, res, '/a', query)
    //     } else if (pathname === '/b') {
    //         app.render(req, res, '/b', query)
    //     } else {
    //         handle(req, res, parsedUrl)
    //     }
    // }).listen(3000, (err) => {
    //     if (err) throw err
    //     console.log('> Ready on http://localhost:3000')
    // })
    const server = express()
    server.use(express.json())
    server.use(bodyParser.json())

    server.get('/api/v1/reviews', (req, res) => {
        //console.log(JSON.stringify(reviewData))
        return res.json(reviewData)

    });

    server.get('/api/v1/reviews/:id', (req, res) => {
        const {id} = req.params
        // const reviewIndex = reviewData.findIndex((review) => review.id === id)
        // const review = reviewData[reviewIndex]
        const review = reviewData.find((review) => review.id === id)

        return res.json(review)

    });

    server.post('/api/v1/reviews', (req, res) =>{
        const review = req.body
        reviewData.push(review)

        const pathToFile = path.join(__dirname, filePath)
        const stringifyReview = JSON.stringify(reviewData, null, 2)

        fs.writeFile(pathToFile, stringifyReview, err => {
            if (err) {
                return res.status(400).json({error: err})
            }
            // return res.json({ Message: 'File has been added'})
            return res.status(200).json({...review})

        })
        // console.log(JSON.stringify(review))
        // return res.status(200).json({...review})

    })




    server.get('*', (req, res) => {
            return handle(req, res)
        })
    const PORT = process.env.PORT || 3000

    // server.use(handle).listen(PORT, (err) => {
    //     if (err) throw err
    //     console.log('> Ready on port ' + PORT)
    // })
    server.listen(PORT, (err) => {
        if (err) throw err
        console.log('> Ready on port ' + PORT)
    })
})
