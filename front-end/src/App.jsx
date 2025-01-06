import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage';
import ArticlesListPage from './pages/ArticleListPage';
import AboutPage from './pages/aboutpage';
import NavBar from './pages/NavBar';
import Layout from './Layout';
import ArticlePage from './pages/articlepage';
import NotFoundPage from './pages/NotFoundPage';

const routes = [
  {
    path: '/', // This is the root path, so it will be the default path
    element: <Layout />, // This is the parent path
    errorElement: <NotFoundPage/>, // This is the error path
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
        element: <ArticlePage />
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
