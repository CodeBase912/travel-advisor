export type SearchState = {
  showMap: boolean;
  searchQuery: string;
  selectedCategory: string;
  selectedRating: string;
  mapCoords: { lat: number; lng: number };
  userCoords: { lat: number; lng: number };
};

export type Action = {
  type: string;
  payload: any;
};
