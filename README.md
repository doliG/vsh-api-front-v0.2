# vsh api v2

## Q & A

**Why is it v2 ? The v1 isn't over yet.**

It's true, but i speak here of V2 of app because of many improvements in my knowledge if technologies and libraries, and i want to start it again from scratch. Rethink it all, to do a better app.


**What is the stack here ?**

This project is based on a basic no-name customers/orders api. So because this api is already done, there is no back-end to do here. I will use a common and basic front stack here :

- Routing : `react-router`
- Data storage, and rendering : `react`, `react-dom`, `redux`
- Package manager : `yarn` (see package.json for full list of dependancies).
- Builder : `brunch`

**License**

You can do what you want with this, this is just a training after all.



## Functionalities

Customers functionalities :
- Show all customers
- Search in all customers
- Show a specific customer AND all his orders
- Update a specific customer
- Delete a specific customer

Orders functionalities :
- Search in customers orders
- Search in all orders
- Delete order
- Update order (optional)



## Organisation

### Routes

Basic routes :

| Path | Name | Role |
|------|------|------|
| `/` | Home | Display quick menu for accessing others pages |
| `/customers` | All customers | Display all customers, with instant search on it |
| `/customers/:id` | One customer | Display one specific customer, with all his orders and maybe later some stats (last order, total amount, etc...) |

The others routes should be like this (but i'm not really sure, _i need to think about it_) :

| Path | Name | Role |
|------|------|------|
| `/customers/new` | Add customer | Add a new customer to database |
| `/customers/:id/neworder` | Add order | Add a new order to database (ofc each order link to a customer by custommer's id) |

### Components

The main point of react is to make reusable component. But i have a problem : some of my components must be able to display itself in differents ways.

So i think i'll pass them a prop which help me to make conditional rendering. For exemple :

```html
<!-- This will render the Customer component for full screen, as it should be
for a specific customer displaying '/customers/:id' -->
<Customer display="full-screen" />

<!-- This will render the Customer component for compact views, as it should be
for viewing all customers in '/customers'  -->
<Customer display="compact" />
```

Here is a quick list of components i will need to write :
```html
<!-- Basics -->
<App />
<PrimaryNav />
<Search /> <!-- I dont really know how to get this working in all my childs components.
I will probably create a custom search in each page, and general search in homepage -->
<Footer /> <!-- Optional -->

<!-- Customers components -->
<Customers />
<Customer />
<CustomerOrders />
<CustomerOrder />

<!-- Page containers components -->
<Home />
<pCustomers />
<pCustomer />
```


## Notes and personnal questions

- It seems that there is no route in back api to get customer'orders in one request : I should be forced to make a request by order, with the id of itself.
