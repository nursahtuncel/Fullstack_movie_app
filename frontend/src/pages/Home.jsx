import api from '../../utils/api';
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader"
import Error from "../components/Error"
import Card from '../components/Card';
import Hero from '../components/Hero';
import { useSearchParams } from 'react-router-dom';
const Home = () => {
  const [params ,setParams]=useSearchParams()

  // api isteğinde kullalnılacak nesne
const search = params.get("search");

const { data, error, isLoading } = useQuery({
  queryKey: ["movies", search],
  queryFn: () =>
    api.get("/api/movies", {
      params: { search }
    }).then(res => res.data)
});

return (
  <>
  <Hero/>
    {isLoading ? (
      <Loader />
    ) : error ? (
      <Error info={error} refetch={refetch} />
    ) : ( 
      <>
    
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
