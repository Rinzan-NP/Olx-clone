import React, { useState, useContext } from "react";
import Logo from "../../olx-logo.png";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { FirebaseContext } from "../../store/FirebaseContext";

export default function Signup() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [number, setnumber] = useState("");
  const [loading, setLoading] = useState(false);

  const { firebase } = useContext(FirebaseContext);
  const submitForm = (e) => {
    e.preventDefault();
    if (!username || !email || !number || !password) {
      alert("Please fill in all fields");
      return;
    }
    else{
    setLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({ displayName: username })
          .then(() => {
            firebase
              .firestore()
              .collection("users")
              .add({
                id: result.user.uid,
                username: username,
                phone: number,
              })
              .then(() => {
                navigate("/login");
              })
              .catch((error) => {
                alert("Error adding user to Firestore:", error);
              })
              .finally(() => {
                setLoading(false);
              });
          })
          .catch((error) => {
            alert("Error updating user profile:", error);
            setLoading(false);
          });
      })
      .catch((error) => {
        alert("Error creating user:", error);
        setLoading(false);
      });
  }}

  return (
    <div>
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Loading...</p>
        </div>
      )}
      {!loading && (
        <div className="signupParentDiv">
          <img width="200px" height="200px" src={Logo} alt="olx logo" />
          <form onSubmit={submitForm}>
            <label htmlFor="fname">Username</label>
            <br />
            <input
              onChange={(e) => setusername(e.target.value)}
              className="input"
              type="text"
              id="fname"
              value={username}
              name="name"
            />
            <br />
            <label htmlFor="fname">Email</label>
            <br />
            <input
              onChange={(e) => setemail(e.target.value)}
              className="input"
              value={email}
              type="email"
              id="email"
              name="email"
            />
            <br />
            <label htmlFor="lname">Phone</label>
            <br />
            <input
              onChange={(e) => setnumber(e.target.value)}
              className="input"
              type="number"
              value={number}
              id="phone"
              name="phone"
              defaultValue="Doe"
            />
            <br />
            <label htmlFor="lname">Password</label>
            <br />
            <input
              onChange={(e) => setpassword(e.target.value)}
              className="input"
              value={password}
              type="password"
              id="password"
              name="password"
            />
            <br />
            <br />
            <button type="submit">Sign up</button>
          </form>
          <a href="/login">Login</a>
        </div>
      )}
    </div>
  );
}
