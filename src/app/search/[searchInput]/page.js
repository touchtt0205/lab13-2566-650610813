"use client";

import { MovieRow } from "@/components/MovieRow";
import { movieDB } from "@/libs/movieDB";

export default function SearchResultPage({params}) {

  const searchInput = params.searchInput;
  const processedSearchInput = searchInput.replaceAll("%20", " ");

  const filteredMovies = movieDB.filter((movie) =>
  movie.title.toLocaleLowerCase().includes(processedSearchInput.toLocaleLowerCase())
  );

  return (
    <div>
      <p className="fw-bold fs-4 text-center my-0">
        Searching &quot; {processedSearchInput} &quot;
      </p>
      <p className="fw-bold fs-4 text-center">Found {filteredMovies.length} result(s)</p>
      {/* Use  "filteredMovies" variable to map-loop rendering MovieRow component */}
      {filteredMovies.map((movie, index) => (
        <MovieRow 
        key={movie.id} 
        id={movie.id}
        title={movie.title}
        detail={movie.detail}
        rating={movie.rating}
        number={index + 1}
        />
      ))}
    </div>
  );
}
