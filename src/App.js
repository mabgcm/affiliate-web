import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Blogpost from "./Pages/Blogpost";
import { AuthContextProvider } from './context/AuthContext';
import Protected from './Components/Protected';
import Account from "./Pages/Account";
import Addblog from "./Pages/Addblog";
import RecentPost from "./Components/RecentPost";
import Posts from "./Components/Posts";
import Posts2 from "./Components/Posts";
import Comment from "./Components/Comment";
import Likes from "./Components/Likes";
import EditBlogPost from "./Pages/EditBlogPost";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Resume' element={<Resume />} />
          <Route path='Portfolio' element={<Portfolio />} />
          <Route path='account' element={<Protected disabled={true}><Account /></Protected>} />
          <Route path='blogpost/:id' element={<Protected disabled={true}><Blogpost /></Protected>} />
          <Route path='edit/:id' element={<Protected disabled={true}><EditBlogPost /></Protected>} />
          <Route path='addblog' element={<Protected><Addblog /></Protected>} />
          <Route path='recentpost' element={<Protected disabled={true}><RecentPost /></Protected>} />
          <Route path='posts' element={<Protected disabled={true}><Posts /></Protected>} />
          <Route path='posts2' element={<Protected disabled={true}><Posts2 /></Protected>} />
          <Route path='comment' element={<Protected><Comment /></Protected>} />
          <Route path='likes' element={<Protected><Likes /></Protected>} />
          <Route path='Contact' element={<Contact />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
