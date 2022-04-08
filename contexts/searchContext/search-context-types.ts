export type SearchState = {
  isDesktop: boolean;
  searchQuery: string;
  selectedCategory: string;
  selectedRating: string;
};

export type Action = {
  type: string;
  payload: any;
};
