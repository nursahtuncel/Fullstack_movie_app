const bodyParser = require("../utils/bodyParser");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const postRequest = async (req, res) => {
  if (req.url === "/api/movies" && req.method === "POST") {

    let body;
    try {
      body = await bodyParser(req);
    } catch {
      res.writeHead(400);
      return res.end("Geçersiz JSON");
    }

    const keys = [
      "title",
      "year",
      "rating",
      "duration",
      "description",
      "language"
    ];

    if (
      keys.some(key => !body[key]) ||
      !Array.isArray(body.genre) ||
      body.genre.length === 0 ||
      !Array.isArray(body.cast) ||
      body.cast.length === 0
    ) {
      res.writeHead(400);
      return res.end("Lütfen zorunlu alanları tanımlayın");
    }

    body.id = crypto.randomUUID();

    const filePath = path.join(__dirname, "../data/movies.json");

    let data = [];
    try {
      data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    } catch {
      data = [];
    }

    data.push(body);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(body));

  } else {
    res.writeHead(404);
    res.end("Geçersiz yola istek atıldı");
  }
};

module.exports = postRequest;
