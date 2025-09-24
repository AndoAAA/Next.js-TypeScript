// Fetch Trending Movies
import Card from "./Card";

interface Movie {
  id: number;
  poster_path?: string;
  title?: string;
  name?: string;
  vote_average?: number;
  media_type?: string;
}

interface TMDBResponse {
  results: Movie[];
}

async function fetchTopRatedTvSeries(): Promise<Movie[]> {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`,
    { next: { revalidate: 60 * 60 } }
  );

  if (!res.ok) {
    console.error("Failed to fetch trending movies:", res.status);
    return [];
  }

  const data: TMDBResponse = await res.json();
  return data.results ? data.results.slice(0, 5) : [];
}

export default async function TopRatedTvSeries() {
  const series = await fetchTopRatedTvSeries();

  return (
    <section className="py-8 px-4 sm:px-8 md:px-20 bg-black text-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
        Top Rated Tv Series
      </h2>
      <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory">
        {series.length > 0 ? (
          series.map((serie) => <Card key={serie.id} media={serie} />)
        ) : (
          <p className="text-gray-400">No Top Rated Tv Series Found</p>
        )}
      </div>
    </section>
  );
}
