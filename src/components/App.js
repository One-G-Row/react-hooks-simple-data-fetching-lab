// create your App component here
import React, { useState, useEffect } from "react";
function App() {
  const [images, setImages] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        setLoaded(true);
      })
      .catch((err) => console.log(err, "response error"));
  }, []);

 
  return (
    <div>
        {!loaded ? <p>Loading...</p> : ""}
      <img
        src={images.message}
        alt="A Random Dog"
      />
    </div>
  );
}
export default App;
