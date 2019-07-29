const fetch = require("node-fetch");

const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/search/:tags", async (req, res) => {
  const tags = req.params.tags;
  const flickr_req = await fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=bef3b787ed7580c3ed7e1b838d2465df&format=json&tags=${tags}&nojsoncallback=1`
  );
  const photos = await flickr_req.json();
  console.log(photos);
  res.json(photos);
});

app.listen(3000, () => {
  console.log("listening at port 3000");
});
