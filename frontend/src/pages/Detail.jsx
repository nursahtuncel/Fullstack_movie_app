import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";
import Loader from "../components/Loader";
import Error from "../components/Error";
import DeleteBtn from "../components/DeleteBtn";

const Detail = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => api.get(`/api/movies/${id}`).then(res => res.data),
    enabled: !!id,
  });

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          
          {/* Poster */}
          <div>
            <img
                src={`https://picsum.photos/seed/${data.id}/200/300`}
              alt={data.title}
              className="w-full rounded-lg object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:col-span-2 space-y-4 text-gray-800">
            <h1 className="text-3xl font-bold text-gray-900">
              {data.title}
            </h1>

            <div className="flex gap-6 text-sm font-medium text-gray-700">
              <span>Year: {data.year}</span>
              <span>Rating: {data.rating}/10</span>
            </div>

            {/* Genre */}
            <div className="flex flex-wrap gap-2">
              {data.genre?.map((g, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm font-semibold bg-gray-200 text-gray-900 rounded-full"
                >
                  {g}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="leading-relaxed text-gray-700">
              {data.description}
            </p>

            {/* Cast */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Cast
              </h3>
              <ul className="list-disc list-inside text-gray-700 text-sm">
                {data.cast?.map((actor, i) => (
                  <li key={i}>{actor}</li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-4">
              <DeleteBtn id={data.id} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Detail;
