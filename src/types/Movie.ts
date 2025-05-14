export interface Movie {
    id: number;
    title: string;
    genre: string;
    poster: string;
}

export interface MovieDetails extends Movie {
  description: string;
  releaseDate: string;
  director: string;
  cast: string[]; // List of actors/actresses
  runtime: number; // Duration in minutes
  rating: number; // Rating out of 10
  trailerUrl: string; // URL to the trailer video
  reviews: string[]; // Array of review excerpts or links to reviews
}

  
// export type Genre = 'Action' | 'Comedy' | 'Drama' | 'Thriller' | 'All';  