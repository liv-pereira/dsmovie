import axios from "axios";
import MovieCard from "Components/MovieCard";
import MovieScore from "Components/MovieScore";
import MovieStars from "Components/MovieStars";
import Pagination from "Components/Pagination";
import {BASE_URL} from "Utils/requests";
import {useEffect, useState} from "react";
import { MoviePage } from "Type/movie";

function Listing (){

  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() =>{
    axios.get (`${BASE_URL}/movies?size=20&page=1`).then(response =>{
      const data = response.data as MoviePage;
      console.log(data);
      setPageNumber(data.number);
    });

  }, []);

  //forma errada
 

  return(
    <>
    <p>{pageNumber}</p>
    <Pagination/>

    <div className="container">
    <div className="row">
      <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
      <MovieCard/>
      </div>
      <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
      <MovieCard/>
      </div>
      <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
      <MovieCard/>
      </div>
      <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
      <MovieCard/>
      </div>
      <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
      <MovieCard/>
      </div>
      
    </div>
    </div>
    


    
    </>
  );
}
export default Listing;