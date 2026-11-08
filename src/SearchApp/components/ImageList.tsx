import ImageCard from "./ImageCard";
import type { UnsplashPhoto } from "../../APIs/types";
import "./gallery.css";

interface ImageListProps {
  photos: UnsplashPhoto[];
}

const ImageList = ({ photos }: ImageListProps) => {
  return (
    <>
      <div id='photos' className='photos'>
        {photos.map((image, index) => {
          return (
            <ImageCard
              key={image.id}
              image={image}
              loading={index < 4 ? "eager" : "lazy"}
            />
          );
        })}
      </div>
    </>
  );
};

export default ImageList;
