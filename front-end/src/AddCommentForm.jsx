
import React, {useState} from 'react';
//Compoennt to add a Comment to the form
const AddCommentForm = ({onAddComment}) => {
    const [nameText, setNameText] = useState('');
    const [commentText, setCommentText] = useState('');
    return (
        <div>

            <h3>Add a Comment</h3>
            <label>
                Name:
                <input type="text" value={nameText} onChange={e => setNameText(e.target.value)} />
            </label>
            <label>
                Comment:
                <textarea value={commentText} onChange={e => setCommentText(e.target.value)} />
            </label>
            <button onClick={() => //continue!!
                setCommentText({nameText, commentText})
            }>Add Comment</button>
        </div>
    )

}

export default AddCommentForm;