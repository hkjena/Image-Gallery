import { useLayoutEffect, useRef } from "react";
import type { UnsplashPhoto } from "../../APIs/types";

interface ImageCardProps {
  image: UnsplashPhoto;
  loading: "eager" | "lazy";
}

const ImageCard = ({ image, loading }: ImageCardProps) => {
  const { urls, alt_description, height, likes, links, width } = image;
  const imageRef = useRef<HTMLImageElement>(null);
  const downloadUrl = links?.download
    ? `${links.download}&force=true`
    : undefined;
  const photoAlt = alt_description ?? "Unsplash photo";

  useLayoutEffect(() => {
    const photoImage = imageRef.current;
    const photoCard = photoImage?.closest<HTMLElement>(".photo-card");
    const gallery = photoCard?.parentElement;
    if (!photoImage || !photoCard || !gallery) return;

    const updateRowSpan = () => {
      const renderedWidth = photoImage.getBoundingClientRect().width;
      const naturalWidth = photoImage.naturalWidth || width;
      const naturalHeight = photoImage.naturalHeight || height;
      if (!renderedWidth || !naturalWidth || !naturalHeight) return;

      const gridStyles = getComputedStyle(gallery);
      const rowHeight = Number.parseFloat(gridStyles.gridAutoRows);
      const rowGap = Number.parseFloat(gridStyles.rowGap);
      const cardSpacing = Number.parseFloat(getComputedStyle(photoCard).paddingBottom);
      if (!rowHeight || Number.isNaN(rowGap) || Number.isNaN(cardSpacing)) return;

      const renderedHeight = (renderedWidth * naturalHeight) / naturalWidth;
      const rowSpan = Math.ceil(
        (renderedHeight + cardSpacing + rowGap) / (rowHeight + rowGap),
      );
      photoCard.style.gridRowEnd = `span ${rowSpan}`;
    };

    updateRowSpan();
    if (typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(updateRowSpan);
    observer.observe(photoImage);
    return () => observer.disconnect();
  }, [height, width]);

  return (
    <article className='photo-card'>
      <figure className='photo-frame'>
        <img
          ref={imageRef}
          src={urls.regular}
          alt={photoAlt}
          width={width}
          height={height}
          loading={loading}
          decoding='async'
          className='photo-image'
        />
        <figcaption className='photo-actions'>
          <span className='photo-likes' aria-label={`${likes} likes`}>
            <svg
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.8'
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
              />
            </svg>
            <span>{likes.toLocaleString()}</span>
          </span>
          {downloadUrl && (
            <a
              className='photo-download'
              href={downloadUrl}
              download
              aria-label={`Download ${photoAlt}`}
            >
              <svg
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.8'
                stroke='currentColor'
                className='h-5 w-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3'
                />
              </svg>
            </a>
          )}
        </figcaption>
      </figure>
    </article>
  );
};

export default ImageCard;
