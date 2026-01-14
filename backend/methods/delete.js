const fs = require("fs");
const pathLib = require("path");
const deleteRequest = (req, res) => {
  const path = req.url.substring(0, req.url.lastIndexOf("/"));
  const id = req.url.split("/")[3];
  const filePath = pathLib.join(__dirname, "../data/movies.json");

  if (path === "/api/movies" && id && req.method === "DELETE") {
    // bütün filmleri al
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    // parametre olarak gelen id'li filmi bul 

    const deletedMovieId= data.find((item)=>item.id===id)
 // yoksa id geçersiz hatası gönder

    if (!deletedMovieId) {
      res.writeHead(404);
      return res.end("hatalı ıd");
    }
    const filtered = data.filter((item) => item.id !== id);
   
      // diziden id'si bilinen filmi kaldır
    fs.writeFileSync(filePath, JSON.stringify(filtered))

    res.writeHead(204);
    return res.end("başarıyla silindi");
  }
};

module.exports = deleteRequest;
