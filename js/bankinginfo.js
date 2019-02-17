/* Get all customers info */
function getAllCustomers() {
  var customerListReq = new XMLHttpRequest();
  customerListReq.open(
    "GET",
    "http://api.reimaginebanking.com/customers?key=b44189b54ec952b7a6dec907e7e77773"
  );
  var customerList;
  customerListReq.onload = () => {
    /* Parse the returned JSON object */
    customerList = JSON.parse(customerListReq.responseText);
<<<<<<< HEAD
=======
    console.log(customerList[0]);

    /* Create a container in html to hold the parsed results */
    var displayContainer = document.createElement("div");
    displayContainer.append(customerList[0]._id);

    /* Locate the element in the html file */
    var customerContainer = document.getElementsByClassName(
      "customerContainer"
    )[0];
    customerContainer.appendChild(displayContainer);
  };
>>>>>>> e1777bfc5bf40109ac4107c6656b9c4909a1e00b

    /* TODO: How to use the fetched data? */
    console.log(customerList[0]);
    var displayContainer = document.createElement("div");
    displayContainer.append(customerList[0]._id);

    var customerContainer = document.getElementsByClassName(
      "customerContainer"
    )[0];
    customerContainer.appendChild(displayContainer);
  };
  customerListReq.send();
}