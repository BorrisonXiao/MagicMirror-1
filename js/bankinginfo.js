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
  };
  /* TODO: How to use the fetched data? */
  console.log(customerList[0]);
  var displayContainer = document.createElement("div");
  displayContainer.append(customerList[0]._id);
  var customerContainer = document.getElementsByClassName(
    "customerContainer"
  )[0];
  customerContainer.appendChild(displayContainer);

  customerListReq.send();
}
