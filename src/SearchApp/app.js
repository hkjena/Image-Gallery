import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import unsplash from '../APIs/unsplash';
import ImageList from './Components/ImageList';
import Spinner from './Components/Spinner/Spinner';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';
import SkeletonLoader from './Components/SkeletonLoader/index';
import { useEffect } from 'react';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [visibility, setVisibility] = useState(true);
  const [spin, setSpin] = useState(true);
  const formSubmit = async term => {
    setSpin(false);
    setPhotos([]);
    setVisibility(false);
    const response = await unsplash.get('/search/photos', {
      params: { query: term.trim(), per_page:30 },
    });
    const photos = await response.data.results;
    if (photos.length === 0) setVisibility('no');
    setSpin(true);
    setPhotos(photos);
  };
  useEffect(() => {
    setVisibility(false);
    const getPhotos = async () => {
      const response = await unsplash.get('/photos/random', {
        params: { count: 20 },
      });
      const photos = await response.data;
      if (photos.length === 0) {
        setVisibility('no');
      }
      setPhotos(photos);
    };
    getPhotos();
  }, []);

  return (
    <>
      <Header />
      <SearchBar OnSubmit={formSubmit} visibility={spin} />
      {visibility === 'no' ? (
        <NotFound />
      ) : photos.length ? (
        <ImageList photos={photos} />
      ) : (
        <Spinner hidden={visibility} />
        // <SkeletonLoader hidden={visibility} />
      )}
      <Footer />
    </>
  );
};

export default App;
