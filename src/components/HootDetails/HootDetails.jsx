import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { show, createComment } from "../../services/hootService";
import CommentForm from '../CommentForm/CommentForm';

const HootDetails = () => {
    const { hootId } = useParams();
    const [hoot, setHoot] = useState(null);

    useEffect(() => {
        const fetchHoot = async () => {
            const hootData = await show(hootId);
            console.log('hootData', hootData);
            setHoot(hootData);
        }
        fetchHoot()
    }, [hootId])
    console.log(hoot)
    //loader
    if (!hoot) return <main>Loading...</main>

    const handleAddComment = async (commentFormData) => {
        const newComment = await createComment(hootId, commentFormData);
        setHoot({ ...hoot, comments: [...hoot.comments, newComment] });
    }

    return (
        <main>
            <header>
                <p>{hoot.category.toUpperCase()}</p>
                <h1>{hoot.title}</h1>
                <p>
                    {hoot.author.username} posted on {new Date(hoot.createdAt).toLocaleDateString()}
                </p>
            </header>
            <p>{hoot.text}</p>
            <section>
                <h2>Comments</h2>
                <CommentForm handleAddComment={handleAddComment}/>
                {/* render text says no comments if there are no comments */}
                {/* {hoot.comment.length === 0 && <p>There are no comments</p>} */}
                {!hoot.comments.length && <p>There are no comments</p>}

                {/* comments coming in the form of an array. Therefore we can use the .map to render jxs */}
                {hoot.comments.map((el) => {
                    return (
                        <article key={el._id}>
                            <header>
                                <p>
                                    {el.author.username} posted on
                                    {new Date(el.createdAt).toLocaleDateString()}
                                </p>
                            </header>
                            <p>{el.text}</p>
                        </article>
                    )
                })}
            </section>
        </main>
    )
}

export default HootDetails;