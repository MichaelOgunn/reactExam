import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import { getTrendingTodayMovies } from "../api/tmdb-api";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';

const TrendingTodayPage = (props) => {
    const { data, error, isPending, isError } = useQuery({
        queryKey: ['trending'],
        queryFn: getTrendingTodayMovies,
    });

    if (isPending) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const movies = data.results;

    return (
        <PageTemplate
            title="Trending Movies Today"
            movies={movies}
            action={(movie) => {
                return <AddToFavoritesIcon movie={movie} />;
            }}
        />
    );
};

export default TrendingTodayPage;