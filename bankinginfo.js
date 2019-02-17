/* Get all customers info */
async function getAllCustomers() {
  var customerListReq = new XMLHttpRequest();
  customerListReq.open(
    "GET",
    "http://api.reimaginebanking.com/customers?key=b44189b54ec952b7a6dec907e7e77773"
  );
  customerListReq.onload = async () => {
    /* Parse the returned JSON object */
    var customerList = JSON.parse(customerListReq.responseText);

    /* TODO: How to use the fetched data? */
    console.log(customerList[0]);
  };
  customerListReq.send();
}

