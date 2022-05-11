import MovieCard from "Components/MovieCard";
import MovieScore from "Components/MovieScore";
import MovieStars from "Components/MovieStars";
import Pagination from "Components/Pagination";

function Listing (){

  return(
    <>
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