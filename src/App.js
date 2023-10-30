import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import PostDetails from './Components/PostDetails';
import CreatePost from './Pages/CreatePost';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './redux/actions';
import Cart from './Pages/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();

  // I fetch post in root so It did not remove post after adding the new post due to re-rendering
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>   
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/post/:postId" element={<PostDetails />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      <ToastContainer />  {/* for toast alert */}
    </>
  );
}

export default App;
