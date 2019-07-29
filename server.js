const fetch = require("node-fetch");
require("dotenv").config();

const express = require("express");
const app = express();

const api_key = process.env.FLICKR_API_KEY;

app.use(express.static("public"));
app.use(express.json());

app.get("/search/:tags", async (req, res) => {
  const tags = req.params.tags;
  const flickr_req = await fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&format=json&tags=${tags}&nojsoncallback=1`
  );
  const photos = await flickr_req.json();
  res.json(photos);
});

app.listen(3000, () => {
  console.log("listening at port 3000");
});
