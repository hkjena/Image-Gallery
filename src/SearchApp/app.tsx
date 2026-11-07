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
  const [spin, setSpin] = useState(true);

  const formSubmit = async (term: string) => {
    setSpin(false);
    setPhotos([]);
    setVisibility(false);
    const response = await unsplash.get<UnsplashSearchResponse>(
      "/search/photos",
      {
        params: { query: term.trim(), per_page: 30 },
      },
    );
    const results = response.data.results;
    if (results.length === 0) setVisibility("no");
    setSpin(true);
    setPhotos(results);
  };

  useEffect(() => {
    const getPhotos = async () => {
      const response = await unsplash.get<UnsplashPhoto[]>("/photos/random", {
        params: { count: 20 },
      });
      const randomPhotos = response.data;
      if (randomPhotos.length === 0) setVisibility("no");
      setPhotos(randomPhotos);
    };
    getPhotos();
  }, []);

  return (
    <>
      <Header />
      <SearchBar OnSubmit={formSubmit} visibility={spin} />
      {visibility === "no" ? (
        <NotFound />
      ) : photos.length ? (
        <ImageList photos={photos} />
      ) : (
        <Spinner />
      )}
      <Footer />
    </>
  );
};

export default App;
