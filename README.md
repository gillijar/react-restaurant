# QuickEats React Restaurant

QuickEats is a fictional food/delivery app. It is front-end only but I am open to pull requests for back-end.

## Technologies
* React.js
* React Router
* Redux/Redux toolkit

## Future Implementations
* Adding user accounts to store the users order history and favorites
* Ability to add a certain quantity of items instead of just one at a time

## How to use this project
* Upon loading the home screen, the user can choose the action button or the navigation to access the applications pages. On mobile the navigation is a hamburger menu on the top right that will give the user access to all the applications pages.
<img width="960" alt="readme-1" src="https://user-images.githubusercontent.com/65259871/131397397-59f5f3cd-ec0f-44f4-ac91-23b2d5666ab2.png">
<img width="156" alt="readme-2" src="https://user-images.githubusercontent.com/65259871/131397810-1f12a1c4-5190-444e-ab25-36f76cf89481.png">
* The menu is made up of 3 categories (Appetizers, Entrees, Desserts). The user will be directed to entrees by default, but the navigation at the top of the menu will allow you to view other items.
* On each item is a "View Info" link that when clicked will redirect the user to a detailed page about that item. The back button on the details page will take you back to your previous spot in the menu.
* On each item and in the details page of each item is an "Add to Cart" button that will add 1 of that item to the cart.
* The cart will display all of the users added items. Each item added will have a plus and minus button to add one and subtract one. If an items total amount is one, the minus button will remove that item from the cart.
* The checkout button in the cart will prompt the user for their information.
* Once the user has confirmed their information, a modal will pop-up displaying the users order number, name, and estimated time that their food will be ready. They will then be redirected back to the home screen.

## License
[MIT](https://choosealicense.com/licenses/mit/)
