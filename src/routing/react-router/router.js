import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import './style.css'

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const BlogPosts = () => <div>BlogPosts</div>;
const NotFound = () => <div>404</div>;

class Routing extends React.Component {
  render() {
    return (
      <Router>
        
        <ul>
          <li>
            <NavLink to="/" isActive = {() => true}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName = "is-active">About</NavLink>
          </li>
          <li>
            <NavLink to="/blog-posts" activeStyle={{ color:'blue'}}>BlogPosts</NavLink>
          </li>
        </ul>
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog-posts" element={<BlogPosts />} />
        <Route path='*' element ={<NotFound />}/>
        </Routes>
      </Router>
    );
  }
}

export default Routing;