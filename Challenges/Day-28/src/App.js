import React, { useState } from "react";
import Images from "./components/Images";
import "./App.css";
import Upload from "./components/Upload";

function App() {
  const [image, setImage] = useState("");
  const [secure_url, setSecureUrl] = useState("");

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "xxs3g8ld");
    fetch("https://api.cloudinary.com/v1_1/ddh9cqm0f/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setSecureUrl(data.secure_url));
  };
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1>Upload Image</h1>
          <p>Upload Image to Cloudinary</p>
          <Upload setImage={setImage} uploadImage={uploadImage} />
        </div>
        <Images url={secure_url} />
      </div>
    </div>
  );
}

export default App;
