export interface iBookItems {
  id: string;
  volumeInfo: iVolumeInfo;
}

export interface iVolumeInfo {
  authors: string[];
  categories: string[];
  description: string;
  imageLinks: iImageLinks;
  infoLink: string;
  language: string;
  pageCount: number;
  previewLink: string;
  publishedDate: string;
  subtitle: string;
  title: string;
}

export interface iImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}
