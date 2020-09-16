import React from 'react'
import { useState } from 'react'


const ReviewForm = (props) => {
    const [form, setForm] = useState({})


    const handleChange = (e) => {
        const target = e.target
        const name = target.name

        setForm({
            ...form,
            [name]: target.value
        })
    }

    const handleGenreChange = (event) => {
        const { options } = event.target
        const optionsLength = options.length
        let value = []
        for (let i = 0; i < optionsLength; i++) {
            if (options[i].selected) {
                value.push(options[i].value)
            }
        }
        setForm({
            ...form,
            genres: value.toString()
        })
    }

   const onSubmit = (event) => {
        event.preventDefault()
       props.onSubmit({...form})

    }

    return (
        <form>
            <h4>Create Review</h4>
            <div className="form-group">
                <label>Title</label>
                <input type="text" id="title"
                       onChange={handleChange}
                       value={form.title}
                       name="title"
                       className="form-control" placeholder="Title..."/>
            </div>
            <div className="form-group">
                <label>Description</label>
                <input type="text"
                       id="description"
                       onChange={handleChange}
                       value={form.optionalDescription}
                       name="description"
                       className="form-control" placeholder="Description..."/>
            </div>
            <div className="form-group">
                <label>Author</label>
                <input type="text"
                       id="description"
                       onChange={handleChange}
                       value={form.reviewer}
                       name="description"
                       className="form-control" placeholder="Description..."/>
            </div>
            <div className="form-group">
                <label>Rating</label>
                <input type="number" max="10" min="0" id="rating"
                       onChange={handleChange}
                       name="ratings"
                       value={form.ratings} className="form-control" placeholder="Rating..."/>
                <small className="form-text text-muted">Max: 10, Min: 0</small>
            </div>
            <div className="form-group">
                <label>Image</label>
                <input type="text"
                       id="image"
                       className="form-control"
                       value={form.optionalImage}
                       name="image"
                       placeholder="http://..."/>
            </div>
            <div className="form-group">
                <label>Genre</label>
                <select className="form-control" onChange={handleGenreChange} id="genre">
                    <option>Gaming</option>
                    <option>Software</option>
                    <option>Food</option>
                    <option>Restaurant</option>
                </select>
            </div>
            <button onClick={onSubmit} type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default ReviewForm
