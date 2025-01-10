
import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage';
import ArticlesListPage from './pages/ArticleListPage';
import AboutPage from './pages/aboutpage';
import NavBar from './pages/NavBar';
import Layout from './Layout';
import ArticlePage, {loader as articleLoader} from './pages/Articlepage';
import NotFoundPage from './pages/NotFoundPage';

const routes = [
  {
    path: '/', // This is the root path, so it will be the default path
    element: <Layout />, // This is the parent path
    errorElement: <NotFoundPage />, // This is the error path
    children: [ // These are the child paths
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/articles',
        element: <ArticlesListPage />
      },
      {
        path: '/articles/:name', // This is a dynamic path that will be used to display the article
        element: <ArticlePage />,
        loader: articleLoader
      }
    ]
  }
];

const router = createBrowserRouter(routes);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
















// import { useState } from 'react';
// import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
// import './App.css';
// import HomePage from './pages/homepage';
// import axios from 'axios';
// import ArticlesListPage from './pages/ArticleListPage';
// import AboutPage from './pages/aboutpage';
// import NavBar from './pages/NavBar';
// import Layout from './Layout';
// import ArticlePage from './pages/articlepage';
// import NotFoundPage from './pages/NotFoundPage';

// const routes = [
//   {
//     path: '/', // This is the root path, so it will be the default path
//     element: <Layout />, // This is the parent path
//     errorElement: <NotFoundPage/>, // This is the error path
//     children: [ // These are the child paths
//       {
//         path: '/',
//         element: <HomePage />
//       },
//       {
//         path: '/about',
//         element: <AboutPage />
//       },
//       {
//         path: '/articles',
//         element: <ArticlesListPage />


//       },
//       {
//         path: '/articles/:name', // This is a dynamic path that will be used to display the article
//         element: <ArticlePage />,
//         loader: async function() {
//           await axios.get(`https://6e0f-2600-480a-8115-3b01-110b-d9-320b-f2ae.ngrok-free.app/api/articles/learn-node`);
//           const {upvotes, comments} = response.data; // This is the data that will be displayed on the page
//           return {upvotes, comments};
//         }
//       }]
//   }
// ];


// const router = createBrowserRouter(routes);

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;
