let name1 = {
  firstName: "Anshuman",
  lastName: "Singh",
  printFullName: () => {
    console.log(this.firstName + " " + this.lastName);
    console.log("object" + this);
  },
};
// console.log("global" + this);

name1.printFullName();
