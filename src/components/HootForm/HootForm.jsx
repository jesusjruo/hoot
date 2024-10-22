import { useState } from "react"

const HootForm = (props) => {
    const [formData , setFormData] = useState({
        title: "",
        text: "",
        category: "News"
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.handleAddHoot(formData);
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input
                    required
                    type="text"
                    name="title"
                    id="title-input"
                    value={FormData.title}
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor="text">Text: </label>
                <input
                    required
                    type="text"
                    name="text"
                    id="text-input"
                    value={FormData.text}
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor="category">Category: </label>
                <select
                    required
                    name="category"
                    id="category-input"
                    value={FormData.category}
                    onChange={handleChange}
                >
                <option value="News">News</option>
                <option value="Games">Games</option>
                <option value="Movies">Movies</option>
                <option value="Sports">Sports</option>
                <option value="Television">Television</option>
                </select>
                <br/><br/>
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default HootForm