# user-product-api
this is the API for manipulating user data and connecting them to product data. this API is build from two other APIs. first is **user API** and second is **product API**
> this API is under development and the codes are not complete

## user API
* Purpose:
this API is used to work with user data and connect them to products of user.
* Data:
the data that are related to each user includes:
ID of user, full name of user, phone number, email address, gender, and age. also the related products must be joined to those data, if necessary.
* Actions:
  * selecting and showing list of all user.
  * selecting and showing the user with specific *id*.
  * creating or deleting users and also updating the information of user.
  * finding the products that has been bought by the user and the number of each one.
  * updating the products if necessary
  * finding the products that has been returned by the user.
  * finding the products that has been bought more than some *specific* number by the user.
* Rules:
each user has a Unique **ID**.

## product API
* Purpose:
this API is used to work with product data and connect them to related users.
* Data:
the data that are related to each products includes:
ID of product, product name, product company, product price and product color. also the related users must be joined to those data, if necessary.
* Actions:
  * selecting and showing list of all products.
  * selecting and showing the product with specific *id*.
  * creating or deleting products and also updating the information of products.
  * finding the users that has bought the product.
  * finding the total number of all orders that are received for this product from any user. 
* Rules:
each product has a Unique **ID**. also the **color** data is optional (might be omitted for some products).


