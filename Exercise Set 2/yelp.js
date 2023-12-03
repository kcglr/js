let priceRanges = [
  { label: "$", tag: "cheap", minPricePerPerson: 0, maxPricePerPerson: 10 },
  { label: "$$", tag: "normal", minPricePerPerson: 11, maxPricePerPerson: 20 },
  {
    label: "$$$",
    tag: "expensive",
    minPricePerPerson: 21,
    maxPricePerPerson: 50,
  },
];

//price per person is good for filtering restaurants

let restaurants = [{ averagePricePerPerson: 5 }];
