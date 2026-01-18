import React from "react";
import InputField from "../components/InputField";
import fields from "../components/FieldData";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // inputlardaki verilerin hepsini alıyorum
    const formData = new FormData(e.target);
    // inputlardaki veriyi nesne şeklinde alıyorum
    const movieData = Object.fromEntries(formData.entries());
    // Kategorileri diziye çevir
    movieData.genre = movieData.genre.split(",");
    movieData.rating = Number(movieData.rating);

    // ekibi diziye çevir
    movieData.cast = movieData.cast.split(",");
    // api'a film oluşturmak için http isteği at
    api
      .post("/api/movies", movieData)
      .then((res) => {
        toast.success("Film listeye eklendi");
        navigate(`/movie/${res.data.id}`);
      })
      .catch((err) => {
        console.log("hata oldu", err);
        toast.error("üzgünüz  işlem başarısız");
      });
  };
  return (
    <div className="min-h-screen bg-yellow-600 flex-1 grid place-items-center px-5">
      <div className="w-full m-4 bg-white max-w-[1000px] p-10 rounded shadow-lg grid grid-cols-1 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8" action="">
          <h1 className="text-3xl font-semibold">Yeni bir film oluştur</h1>
          {fields.map((field, i) => (
            <InputField key={i} {...field} />
          ))}

          <button className="shadow border border-gray-200 py-3 rounded-lg hover:shadow-lg hover:bg-gray-200 transition">
            Oluştur
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
