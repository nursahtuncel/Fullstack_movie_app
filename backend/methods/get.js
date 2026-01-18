const fs = require("fs");

const getRequest = (req, res) => {
  const path = req.url.substring(0, req.url.lastIndexOf("/"));
  const id = req.url.split("/")[3];
  const movies = fs.readFileSync("./data/movies.json", "utf-8");

  // /api/movies/:id
  if (path === "/api/movies" && id && !req.url.includes("?")) {
    const data = JSON.parse(movies);
    const movie = data.find(item => item.id === id);

    if (movie) {
      return res.end(JSON.stringify(movie));
    }

    res.writeHead(404);
    return res.end(JSON.stringify({ message: "Aranılan film bulunamadı" }));
  }

  // query param (?search=)
  if (req.url.includes("=")) {
    const param = req.url.split("=").pop().toLowerCase();
    const data = JSON.parse(movies);

    const filtered = data.filter(movie =>
      movie.title.toLowerCase().includes(param)
    );

    return res.end(JSON.stringify(filtered));
  }

  // /api/movies
  if (req.url === "/api/movies") {
    return res.end(movies);
  }

  res.writeHead(404);
  res.end("yol bulunamadı");
};

module.exports = getRequest;
