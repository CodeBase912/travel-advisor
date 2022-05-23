export type SearchState = {
  showMap: boolean;
  searchQuery: string;
  selectedCategory: string;
  selectedRating: string;
  mapCoords: { lat: number; lng: number };
  userCoords: { lat: number; lng: number };
  result?: SearchResult;
};

export type SearchResult = {
  list: any[];
  mapCarousel: any[];
  activeItemID: number;
};

export type Action = {
  type: string;
  payload: any;
};
