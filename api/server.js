const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
const port = 3001; // or any other port you prefer
app.use(cors());

app.get("/api/images", async (_req, res) => {
  const url = `https://api.flickr.com/services/feeds/photos_public.gne?format=json`;
  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching images from Flickr API:", error);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
