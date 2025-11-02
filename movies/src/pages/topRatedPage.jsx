import PageTemplate from "../components/templateMovieListPage";
import { getTopRatedMovies } from "../api/tmdb-api";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import AddToWatchListIcon from '../components/cardIcons/addToWatchList';

const TopRatedPage = () => {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: getTopRatedMovies,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data;

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}
      action={(movie) => (
        <>
          <AddToFavoritesIcon movie={movie} />
          <AddToWatchListIcon movie={movie} />
        </>
      )}
    />
  );
};

export default TopRatedPage;