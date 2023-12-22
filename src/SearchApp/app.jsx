import { useState } from "react";
import SearchBar from "./components/SearchBar";
import unsplash from "../APIs/unsplash";
import ImageList from "./components/ImageList";
import Spinner from "./components/Spinner/Spinner";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import { useEffect } from "react";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [visibility, setVisibility] = useState(true);
  const [spin, setSpin] = useState(true);
  const formSubmit = async (term) => {
    setSpin(false);
    setPhotos([]);
    setVisibility(false);
    const response = await unsplash.get("/search/photos", {
      params: { query: term.trim(), per_page: 30 },
    });
    const photos = await response.data?.results;
    if (photos.length === 0) setVisibility("no");
    setSpin(true);
    setPhotos(photos);
  };
  useEffect(() => {
    setVisibility(false);
    const getPhotos = async () => {
      const response = await unsplash.get("/photos/random", {
        params: { count: 20 },
      });
      const photos = await response?.data;
      if (photos.length === 0) setVisibility("no");
      setPhotos(photos);
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
        <Spinner hidden={visibility} />
      )}
      <Footer />
    </>
  );
};

export default App;
