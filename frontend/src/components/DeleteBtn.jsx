import React from "react";
import { FaTrash } from "react-icons/fa";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const DeleteBtn = ({ id }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    api
      .delete(`/api/movies/${id}`)
      .then(() => {
        navigate("/");
        toast.warning("film kaldırıldı");
      })
      .catch((err) => {
        console.log(err);
        toast.warning("Silme işlemi başarısız oldu");
      });
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 text-white p-2 rounded-md hover:bg-red-400"
    >
      <FaTrash />
    </button>
  );
};

export default DeleteBtn;
