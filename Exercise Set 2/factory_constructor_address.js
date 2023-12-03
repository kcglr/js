//RATHER THAN WRITING IT LIKE THIS;

// let address = {
//   street: ": 4148 cavecreek",
//   city: ": Illinois",
//   zipCode: ": 60155",
// };

//USE FACTORY FUNCTION METHOD:

//let address = createAddress(": 4148 cavecreek", ": Illinois", ": 60155");
//console.log(address);

function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

// OR USE CONSTRUCTOR METHOD:

let address = new Address(": 4148 cavecreek", ": Illinois", ": 60155");
console.log(address);

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
