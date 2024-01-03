const person = {
  firstName: "kadir",
  lastName: "caglar",
  fullName: function () {},
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },

  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "bombo klar";

//getters = access properties
//setters = change (mutate) them

console.log(person);
