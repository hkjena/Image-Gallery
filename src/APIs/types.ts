export interface UnsplashPhoto {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string | null;
  likes: number;
  links?: {
    download?: string | null;
  };
}

export interface UnsplashSearchResponse {
  results: UnsplashPhoto[];
}
