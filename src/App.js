import React, { useState, useEffect } from "react";
import AppSearchField from "./Components/AppSearchField";
import AppImageGrid from "./Components/AppImageGrid";

function App() {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/images");
        const data = await response.json();
        console.log(data);
        const fetchedImages = data.items.map((item) => ({
          img: item.media.m,
          title: item.title,
        }));
        setImages(fetchedImages);
        setFilteredImages(fetchedImages); // Set both original and filtered images
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const handleSearch = (keyword) => {
    const filteredImages = images.filter((item) =>
      item.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredImages(filteredImages); // Update filteredImages state instead of images state
  };

  return (
    <div>
      <AppSearchField onSearch={handleSearch} />
      <AppImageGrid images={filteredImages} /> {/* Use filteredImages for rendering */}
    </div>
  );
}

export default App;
