export interface Movie {
    id: number;
    title: string;
    genre: Genre;
    poster: string;
  }
  
  export type Genre = 'Action' | 'Comedy' | 'Drama' | 'Thriller' | 'All';  