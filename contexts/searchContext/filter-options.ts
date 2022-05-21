type FilterOpitons = {
  categoryOptions: {
    value: string;
    displayText: string;
  }[];
  ratingsOptions: {
    value: string;
    displayText: string;
  }[];
};

const filterOptions: FilterOpitons = {
  categoryOptions: [
    { value: "attractions", displayText: "Attractions" },
    { value: "restaurants", displayText: "Restaurants" },
    { value: "hotels", displayText: "Hotels" },
  ],
  ratingsOptions: [
    { value: "0", displayText: "All" },
    { value: "3", displayText: "Above 3.0" },
    { value: "4", displayText: "Above 4.0" },
    { value: "4.5", displayText: "Above 4.5" },
  ],
};

export default filterOptions;
