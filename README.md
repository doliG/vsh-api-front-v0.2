# vsh api v0.2

## Q & A

**Why is it v0.2 ? The v1 isn't over yet.**

It's true, but I speak here of v0.2 of app because of many improvements in my knowledge (technologies and libraries), and I want to start it again from scratch, to rethink all of it.


**What is the stack here ?**

This project is based on a basic no-name customers/orders api. Because this api is already done, there is no back-end in this projet. This is a **react front app**. I will use a common and basic front stack here :

- Routing : `react-router`
- Data storage, and rendering : `react`, `react-dom`, `redux`
- Package manager : `yarn` (see package.json for full list of dependancies).
- Builder : `brunch`

**License**

This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.

![License](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)



## Functionalities

Customers functionalities :
- Show all customers
- Search in all customers
- Show a specific customer AND all his orders
- Update a specific customer
- Delete a specific customer

Orders functionalities :
- Search in customer's orders
- Search in all orders
- Delete order
- Update order (optional)



## Organization

### Routes

Basic routes :

| Path | Name | Role |
|------|------|------|
| `/` | Home | Display quick menu for accessing others pages (and then a global search in orders and customers) |
| `/customers` | All customers | Display all customers, with instant search on it |
| `/customers/:id` | One customer | Display one specific customer, with all his orders and maybe later some stats (last order, total amount, etc...) |

The others routes should be like this (but i'm not really sure, _I need to think about it_) :

| Path | Name | Role |
|------|------|------|
| `/customers/new` | Add customer | Add a new customer to database |
| `/customers/:id/neworder` | Add order | Add a new order to database (ofc each order link to a customer by customer's id) |

### Components

The main point of react is to make reusable component. But I have a problem : some of my components must be able to display itself in differents ways to fit in the context.

So I think i'll pass it a prop to make conditional rendering. For example :

```html
<!-- This will render the Customer component for full screen, as it should be
for a specific customer displaying in '/customers/:id' -->
<Customer display="full-screen" />

<!-- This will render the Customer component for compact views, as it should be
for viewing all customers in '/customers'  -->
<Customer display="compact" />
```

Here is a quick list of components I will need to write :
```html
<!-- Basics -->
<App />
<PrimaryNav />
<Search /> <!-- I don't really know how to get this working in all my children components.
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


## Notes and personal questions

- It seems that there is no route in back api to get customer's orders in one request : I should be forced to make a request by order, with the id of itself.
