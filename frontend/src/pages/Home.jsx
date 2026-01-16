import api from '../../utils/api';
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader"
import Error from "../components/Error"
import Card from '../components/Card';

const Home = () => {
  const { data, error, isLoading,refetch } = useQuery({
    queryKey: ["movies"],
    queryFn: () => api.get("/api/movies").then(res => res.data)
  });
return (
  <>
  
    {isLoading ? (
      <Loader />
    ) : error ? (
      <Error info={error} refetch={refetch} />
    ) : (
      <>
        <h1>Movies</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 '>
           {data.map(movie => (
          <Card key={movie.id} movie={movie} />
        ))}
    

        </div>
       
      </>
    )}
  </>
);
}
export default Home;
