import { useParams,  useLoaderData } from "react-router-dom";
import articles from "../article-content";
import axios from 'axios';

export default function ArticlePage() {
    const { name } = useParams();
    const {data} = useLoaderData();

    if(!data) {
        return <div>Loading...</div>;
    }

    const { upvotes } = data;

    const article = articles.find(article => article.name === name);


    return (
        <>
            <h1>{article.title}</h1>
            <p>This article has {upvotes} upvotes! </p>
            
            {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
            
            ))}
            </>
    );
  }


  export async function loader({params}) {
    try {
      const response = await axios.get('/api/articles/' + params.name);
      console.log('API response:', response.data);
      const { upvotes, comments } = response.data; // This is the data that will be displayed on the page
      return { data: { upvotes, comments } };
    } catch (error) {
      console.error('Failed to fetch article data:', error);
      throw new Error('Failed to fetch article data');
    }
  }