import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import unsplash from "../APIs/unsplash";
import ImageList from "./components/ImageList";
import Spinner from "./components/Spinner/Spinner";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import type { UnsplashPhoto, UnsplashSearchResponse } from "../APIs/types";

const App = () => {
  const [photos, setPhotos] = useState<UnsplashPhoto[]>([]);
  const [visibility, setVisibility] = useState<boolean | "no">(false);
  const [isSearching, setIsSearching] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const formSubmit = async (term: string) => {
    setIsSearching(true);
    setPhotos([]);
    setVisibility(false);
    setErrorMessage(null);

    try {
      const response = await unsplash.get<UnsplashSearchResponse>(
        "/search/photos",
        {
          params: { query: term.trim(), per_page: 30 },
        },
      );
      const results = response.data.results;
      if (results.length === 0) setVisibility("no");
      setPhotos(results);
    } catch (error: unknown) {
      setErrorMessage(getErrorMessage(error));
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const response = await unsplash.get<UnsplashPhoto[]>("/photos/random", {
          params: { count: 20 },
        });
        const randomPhotos = response.data;
        if (randomPhotos.length === 0) setVisibility("no");
        setPhotos(randomPhotos);
      } catch (error: unknown) {
        setErrorMessage(getErrorMessage(error));
      }
    };
    getPhotos();
  }, []);

  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <SearchBar onSubmit={formSubmit} isSearching={isSearching} />
      <main className='flex flex-1 flex-col'>
        {errorMessage ? (
          <p role='alert' className='my-6 text-center text-red-700'>
            {errorMessage}
          </p>
        ) : visibility === "no" ? (
          <NotFound />
        ) : photos.length ? (
          <ImageList photos={photos} />
        ) : (
          <Spinner />
        )}
      </main>
      <Footer />
    </div>
  );
};

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return `Unable to load photos: ${error.message}`;
  }

  return "Unable to load photos. Please try again.";
};

export default App;
