import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {  editPost, deletePost } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import AddToCartButton from '../Components/AddToCartButton';
import FilterButton from '../Components/FilterButton';


const Posts = () => {
  // setting up edit states locally
  const [editId, setEditId] = useState(null);
  
  const [editedData, setEditedData] = useState({
    title: '',
    body: '',
    price: 0,
    rating: 0,
  });

  const dispatch = useDispatch();

  const filterByPrice = useSelector((state) => state.posts.filterByPrice);

  // destructuring data with useSelector
  const { posts, loading, error } = useSelector((state) => state.posts);


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  
  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleEditPost = (id) => {
    // add to redux state with action editPost
    dispatch(editPost(id, editedData));
    // reset the local state state to null
    setEditId(null);
    setEditedData({
      title: '',
      body: '',
      price: 0,
      rating: 0,
      quantity: 0 
    });
    // success toast 
    toast.success('Post edited successfully!');
  };


  const handleDelete = (id) => {
    // Implement delete functionality with help of redux
     toast.error('Post deleted successfully!');
  };

  // Implement logic to filter products based on filterByPrice
  const filteredProducts = posts.filter((product) => {
    if (filterByPrice === 'All') {
      return true;
    } else {
      // Extract min and max values from the selected price range
      const [minPrice, maxPrice] = filterByPrice.split('-');

      // Extract numeric values from the product price
      const productPrice = parseFloat(
        String(product.price).replace('₹', '').replace(',', '')
      );

      // Check if the product price falls within the selected range
      if (maxPrice == '1000') {
        return productPrice >= parseFloat(minPrice);
      } else {
        return (
          productPrice >= parseFloat(minPrice) &&
          productPrice <= parseFloat(maxPrice)
        );
      }
    }
  });
 
  return (
    <div>
      <Container>
        <h2 className="mt-4 mb-3">Posts</h2>
        <FilterButton />
        <br />
        <Row>
        {filteredProducts.map((post) => (
          <Col key={post.id} xs={12} md={6} lg={4} xl={3} className="mb-4">
            {editId === post.id ? (
              <>
              <div className="card">
                <div className="d-flex justify-content-end">
                
                </div>
                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/011/883/293/original/modern-paper-bag-colorful-logo-good-for-technology-e-commerce-logo-online-shop-logo-cart-logo-dummy-logo-bussiness-logo-free-vector.jpg" />
                <div className="card-body">
                  <h5 className="card-title">
                    <input
                      type="text"
                      value={editedData.title}
                      placeholder={post.title}
                      onChange={(e) =>
                        setEditedData({ ...editedData, title: e.target.value })
                      }
                    />
                  </h5>
                  <h5 className="card-body">
                    <input
                        type="text"
                        value={editedData.body}
                        placeholder={post.body}
                        onChange={(e) =>
                          setEditedData({ ...editedData, body: e.target.value })
                        }
                      />
                  </h5>
                  <h5 className="card-body">&#8377; 
                  <input
                        type="number"
                        value={editedData.price}
                        placeholder={post.price}
                        onChange={(e) =>
                          setEditedData({ ...editedData, price: e.target.value })
                        }
                      />
                  </h5>  
                  <h5 className="card-body">
                  <input
                        type="number"
                        value={editedData.rating}
                        placeholder={post.rating}
                        onChange={(e) =>
                          setEditedData({ ...editedData, rating: e.target.value })
                        }
                      />
                  </h5>  
                  <Button variant="success" onClick={() => handleEditPost(post.id)}>Save</Button>
                </div>
                </div>
              </>
            ) : (
            
              <div className="card">
                <div className="d-flex justify-content-end">
                  <FontAwesomeIcon icon={faPencil}  onClick={() => handleEdit(post.id)} style={{color: "#4b80dd", height:20, marginRight: 20}}  />
                  <FontAwesomeIcon icon={faTrashAlt} onClick={() => handleDelete(post.id)} style={{color: "red", height: 20}} />
                </div>
                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/011/883/293/original/modern-paper-bag-colorful-logo-good-for-technology-e-commerce-logo-online-shop-logo-cart-logo-dummy-logo-bussiness-logo-free-vector.jpg" />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <h5 className="card-body">{post.body}</h5>
                  <h5 className="card-body">&#8377; {post.price}</h5>
                  <h5 className="card-body">Ratings: {post.rating}</h5>
                  <Link to={`/post/${post.id}`} className="btn btn-primary">View Details</Link>{' '}
                  <AddToCartButton item={post} />
                </div>
              </div>
          )}
          </Col>
        ))}
        </Row>
      </Container>
    </div>
  );
};

export default Posts;