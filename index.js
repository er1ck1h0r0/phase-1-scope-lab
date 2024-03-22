var customerName = 'bob';
function upperCaseCustomerName(){
    if(customerName)
    customerName=customerName.toUpperCase();
}

function setBestCustomer(){
     bestCustomer='not bob';
}

function overwriteBestCustomer(){
    bestCustomer='maybe bob'
}

const leastFavouriteCustomer='jake'
function changeLeastFavoriteCustomer(){
 leastFavouriteCustomer='bob'
}