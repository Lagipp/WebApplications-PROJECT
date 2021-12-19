
import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";
import PostNew from "./components/PostNew";
import Header from "./components/Header"
import Home from "./components/Home"
import PostPage from './components/PostPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Temp from './components/Temp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';



function App() {
  
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [jwt, setJwt] = useState("")
  const [user, setUser] = useState({})
  


  /*  fetching all posts and comments from the database 
   *  and sending them as parameters to other components  */


  useEffect(() => {
    fetch("/users/post/")
    .then(response => response.json())
    .then(json => setPosts(json))
  }, [posts])

  useEffect(() => {
    fetch("/users/comment/")
    .then(response => response.json())
    .then(json => setComments(json))
  }, [comments])
  

  return (
    <Router >
      <div className="App">

        <Header />
        <NavBar />


        { /* notifying the user after logging in that it was succesful */ }

        <h2> {jwt ? `Logged in as ${user.username}!` : ""} </h2>

        <Routes>

          <Route exact path="/" element={ <Home posts={posts} /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/login" element={ <Login setJwt={setJwt} setUser={setUser} jwt={jwt} /> } />

          <Route exact path="/post" element={ <PostNew  jwt={jwt}/> } />
          <Route path="/post/:id" element={ <PostPage posts={posts} comments={comments} jwt={jwt}/> } />
          <Route path="*" element={ <Temp /> } />

        </Routes>

        <Footer />

      </div>
    </Router>
  );
}


export default App;
