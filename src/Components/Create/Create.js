import React, { Fragment, useContext, useState } from 'react';
import { FirebaseContext,AuthContext } from '../../store/FirebaseContext'; 
import './Create.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const {firebase}=useContext(FirebaseContext)
  const {user}=useContext(AuthContext)
  const navigate=useNavigate()

  const [name,setName]=useState('')
  const [category,setCategory]=useState('')
  const [price,setPrice]=useState('')
  const [image,setImage]=useState(null)

  const date=new Date()

  const submitData=(e)=>{

    //form validation
    if(!name||!category||!price||!image){
      alert('Please fill in all fields')
      return
    }
    //image validation
    if(image.size>1000000){
      alert('Image size must be less than 1MB')
      return
    }
    //image validation
    if(image.type!=='image/jpeg'&&image.type!=='image/png'&&image.type!=='image/jpg'&&image.type!=='image/gif'&&image.type!=='image/bmp'){
      alert('Image type must be jpg,png,jpeg,gif,bmp')
      return
    }
    else{
      firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
        ref.getDownloadURL().then((url)=>{
          console.log(url);
          firebase.firestore().collection('products').add({
            name,
            category,
            price,
            url,
            userId:user.uid,
            createdAt:date.toDateString()
          })
          navigate('/')
        })
      })
  }}
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
              value={category}
              onChange={(e)=>{setCategory(e.target.value)}}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):''}></img>
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={submitData} className="uploadBtn">upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
