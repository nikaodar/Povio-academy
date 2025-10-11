//1.
function calculateTotalPrice(items) {
  let totalPrice = 0;

  items.forEach((item) => {
    let itemTotalPrice = item.price * item.quantity;

    if (item.quantity > 10) {
      itemTotalPrice *= 0.9;
    }

    if (item.category === "sale") {
      itemTotalPrice *= 0.8;
    }

    totalPrice += itemTotalPrice;
  });

  return totalPrice;
}

//2.
function processUser(user) {
  if (user?.info?.personal?.age > 18) {
    console.log("Processing user:", user);
  }
}

//3.
function isStudentWithGoodGrades(person) {
  if (!person) {
    return false;
  }

  return (
    person.age >= 18 &&
    person.age <= 25 &&
    person.educationLevel === "college" &&
    person.grades >= 80
  );
}

//4.
function fn(a, b, c, d) {
  return a + b - c * d;
}

//5.
function processData({ name, age, city }) {
  // Rest of the code that uses name, age, city...
}

//6.
function calculateTotalPrice(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return 0;
  }
  const firstItem = items[0];

  if (!firstItem || firstItem.price <= 0 || firstItem.quantity <= 0) {
    return 0;
  }

  let totalPrice = items[0].price * items[0].quantity;
  // Perform additional calculations...
  return totalPrice;
}
