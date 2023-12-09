import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import { RouterProvider, createBrowserRouter }  from 'react-router-dom'
import CreatePost from './component/CreatePost.jsx'
import { PostList } from './store/post-list-store.jsx'

const router = createBrowserRouter([
  {
     path: "/", 
    element: <App/>,
    children: [
    {path: '/', element: <PostList/>},
    {path: '/create-post', element:<CreatePost/> }
  ]
 }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
