import React, { useContext } from 'react';
import { PostContext } from '../../store/FirebaseContext';
import './View.css';
function View() {
  const { postDetails } = useContext(PostContext);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        
      </div>
    </div>
  );
}
export default View;
