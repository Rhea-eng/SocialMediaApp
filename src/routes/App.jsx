import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from "../component/header"
import Footer from "../component/footer"
 import SideBar from "../component/SideBar"
 import CreatePost from "../component/CreatePost"
 import PostList from "../component/PostList"
import {useState} from "react";
import PostListProvider from "../store/post-list-store"
import { Outlet } from "react-router-dom"


function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
    <div className="app-container">
     <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} 
     />
     <div className="content">
      <Header/>
       {selectedTab === "Home" ? (
        <PostList></PostList>
      ) : (
        <CreatePost></CreatePost>
      )} 
      {/* <Outlet/> */}
      <Footer/>
      </div>
    </div> 
    </PostListProvider>   
  )
}

export default App;
