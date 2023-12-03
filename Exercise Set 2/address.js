let address = {
  street: ": 4148 cavecreek",
  city: ": Illinois",
  zipcode: ": 60155",
};

function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}

showAddress(address);
