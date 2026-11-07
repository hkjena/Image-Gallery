import ImageCard from "./ImageCard";
import type { UnsplashPhoto } from "../../APIs/types";

interface ImageListProps {
  photos: UnsplashPhoto[];
}

const ImageList = ({ photos }: ImageListProps) => {
  return (
    <>
      <div id='photos' className='photos'>
        {photos.map((image) => {
          return <ImageCard key={image.id} image={image} />;
        })}
      </div>
    </>
  );
};

export default ImageList;
