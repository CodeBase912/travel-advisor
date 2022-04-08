export type SearchState = {
  isDesktop: boolean;
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
