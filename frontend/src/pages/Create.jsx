import React from "react";
import InputField from "../components/InputField";

const Create = () => {
  const fields = [
    { name: "title", label: "Başlık" },
    { name: "description", label: "Açıklama" },
    { name: "rating", label: "puan", type: "number",min:"1", max:"10" },
    { name: "cast", label: "ekip(, ile ayırınız)" },
    { name: "genre", label: "Şifre"  },
    { name: "year", label: "yıl",type:"number" ,min:"1900", max:"2026" },
    { name: "duration", label: "süre", type: "number"
     },
         { name: "director", label: "Yapımcı"
     },
    { name: "genre", label: "Kategoriler (, ile ayırınız)" },
 
  ];

  return (
    <div className="min-h-screen bg-yellow-600 flex-1 grid place-items-center px-5">
      <div className="w-full m-4 bg-white max-w-[1000px] p-10 rounded shadow-lg grid grid-cols-1 md:grid-cols-2">
        <form className="flex flex-col gap-8" action="">
          <h1 className="text-3xl font-semibold">Yeni bir film oluştur</h1>
          {fields.map((field) => (
            <InputField
              {...field}
            />
          ))}

          <button>Oluştur</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
