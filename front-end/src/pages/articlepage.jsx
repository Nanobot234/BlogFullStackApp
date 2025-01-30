import { useParams,  useLoaderData } from "react-router-dom";
import { useState } from "react";
import articles from "../article-content";
import CommentsList from "../CommentsList";
import AddCommentForm from "../AddCommentForm";
import axios from 'axios';

export default function ArticlePage() {
    const { name } = useParams();
    const { upvotes: initialUpvotes, comments: initialComments} = useLoaderData(); // This is the data that will be displayed on the page
    
    const [upvotes, setUpvotes] = useState(initialUpvotes); // This is the upvote state that will be updated when the user clicks the upvote button
    const [comments, setComments] = useState(initialComments); // This is the comments state that will be updated when the user adds a comment
    


    const article = articles.find(article => article.name === name);

    const onUpVoteClicked = async () => {
        const response = await axios.post(`/api/articles/${name}/upvote`);
        console.log('Upvote response:', response.data);
        setUpvotes(response.data.upvotes); // Update the upvotes state with the new upvotes value

    }

    const onAddComment = async (nameText, commentText) => {
        const response = await axios.post(`/api/articles/${name}/comments`, {
            postedBy: nameText,
            text: commentText,
        });
        console.log('Comment response:', response.data);
        const updatedComments = response.data.comments; // Get the updated comments from the response
        setComments(updatedComments); // Update the comments state with the new comments

      };
    return (
        <>
            <h1>{article.title}</h1>
            <button onClick={onUpVoteClicked}>Upvote</button>
            <p>This article has {upvotes} upvotes! </p>
            {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p> ))}
            <AddCommentForm onAddComment={onAddComment} /> {/* Display the AddCommentForm */}
            <CommentsList comments={comments} />  {/* Display the comments */}
        </>
    );
  }


  export async function loader({params}) {
    try {
     const response = await axios.get(`/api/articles/${params.name}`);
      console.log('API response:', response.data);
      const { upvotes, comments } = response.data; // This is the data that will be displayed on the page
      return { upvotes, comments }; // Return the data as an object
    } catch (error) {
      console.error('Failed to fetch article data:', error);
      throw new Error('Failed to fetch article data');
    }
  }


  