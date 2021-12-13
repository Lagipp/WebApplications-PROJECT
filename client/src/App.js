
import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";
import PostNew from "./components/PostNew";
import Header from "./components/Header"
import Home from "./components/Home"
//import SinglePost from "./components/SinglePost"
import PostPage from './components/PostPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Temp from './components/Temp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
// , useEffect


// comments


function App() {
  
  const [posts, setPosts] = useState([
    {
      id: 1,
      body: "print('Hello World!')"
    },

    {
      id: 2,
      body: "print(f'Meaning of life: {value}')"
    }
  ])


  const [newBody, setNewBody] = useState('');


  // https://reactjs.org/docs/conditional-rendering.html
  // source for { ?: }


  // checking if there is a post, if there is, the ID 
  // is one larger than the last one in the array
  // if there's no posts, we assign it ID 1

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = posts.length 
      ? posts[posts.length - 1].id + 1 
      : 1;
    
    const newPost = { id, body: newBody };

    const allPosts = [...posts, newPost];

    setPosts(allPosts);
    setNewBody('');

  }


  return (
    <Router >
      <div className="App">

        <Header />
        <NavBar />

        <Routes>

          <Route exact path="/" element={ <Home posts={posts} /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/login" element={ <Login /> } />

          <Route exact path="/post" element={ <PostNew handleSubmit={handleSubmit} newBody={newBody} setNewBody={setNewBody} /> } />
          <Route path="/post/:id" element={ <PostPage posts={posts}/> } />
          <Route path="*" element={ <Temp /> } />

        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
