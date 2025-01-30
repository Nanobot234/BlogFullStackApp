const CommentsList = ({ comments }) => {
    return (
        <>
            <h3>Comments:</h3>
            {comments.map(comment => (
                <div key={comment.text}>
                    <h3>{comment.postedBy}</h3>
                    <p>{comment.text}</p>
                </div>
            ))}
        </>
    );
};

export default CommentsList;