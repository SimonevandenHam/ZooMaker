# ZooMaker Assignment

This assignment focuses on a few things:

- Usage of React components for recurring interface items
- Handling data and using it in different manners (Redux!)
- Creating a design by (simple) specification

The setup of this assignment is as if it is requested by a client, to make this a realistic exercise.

## Introduction

Meet our client: Zoo Industries, the number one animal distributor around the world. Their core business is providing animals to Zoo's all over the world.
![Logo of Zoo Industries](./images/Animals/PuffinBird.png)

Zoo Industries has asked us to create a WebApp which enables their clients to select the animals they want, and store those (sort of as a webshop, but without the actual buy-button).

## Data

Zoo Industries is very privacy aware, so we are not allowed to store any information on our servers. All the progress made by users must be saved in their browsers, and our client accepts the restrictions that brings. Our lead developer mentioned something about saving configuration as a JSON string in [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) (look into that). This means that _no login is needed_

The list of the available animals is provided through an API of our client. It is a single call you can obtain through https://ernst.mulde.rs/ZooIndustries.json. The client did mention something about them always working on that list (so be aware that data might be incomplete).

## Design

We have put the best-of-the-best of our design team on this client work. And they have come up with this award-wining minimalist design. The web app will have three screens.

The first will be the Zoo Overview page:
![Overview page](./images/Design/Overview.png)
On this page you can create a new zoo, open an existing one or delete an old one.

The New zoo page is also very simple:
![New Zoo page](./images/Design/NewZoo.png)
On this page a user can enter the name of his zoo. And the budget they have.

The edit page is the most complex:
![New Zoo page](./images/Design/EditZoo.png)
On the left you can see the Available Animals list, this is what is returned from the call to the clients API. We want to be able to order that list by price and alphabetical animal name. For the \<select> element you don't have to follow this design, just use the default.
In the animal images set a placeholder is also provided (in case the API doesn't return an image name for an animal).
You can select animals only once.

On the right you see the My Animals. Which speaks for itself I think. The cross lets you remove the animal from what you have selected.

In the top bar you see the name of your zoo, the budget that is left and a possibility to save. Saving saves the progress, and sends you back to the Zoo Overview page.

## Technical

We think Zoo Industries will become a long-time client of ours. So we want maintainable code. This means our lead developer expects a React web-app with a logical naming structure of files and folders. Furthermore remember that we think no function should normally have more than 10 lines of code in it (there are exceptions).
