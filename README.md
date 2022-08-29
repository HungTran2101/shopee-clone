# Shopee clone for practice

## [Link Deploy](https://react02-group06.vercel.app)

### Purpose of this project:
This is the project i've done with my team in my intern semester, my team tried to copy as same as possible from the origin website [Shopee.vn](https://shopee.vn)  
By recreate from UX/UI to functionality like cart, search, payment,...  
But the project only limited in B2C model which means one sell many buy.

### Language and Tools I used in this project:
<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/sass/sass-original.svg" title="Sass" alt="Sass" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original-wordmark.svg" title="Vscode" alt="Vscode" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/figma/figma-original.svg" title="Figma" alt="Figma" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="Redux" alt="Redux" width="40" height="40"/>&nbsp;
</div>

### APIs
I used APIs provide by BE team from intern semester to fetch data.

### Feature
- Client side:
  - Show products with pagination
  - Search by category, subcategory, keyword, price (included debounce for dropdown box when search)
  - Add to cart, Buy now
  - Show comments, Fitler comments
  - Show-Edit info, addresses, orders of customer
  - Recovery password with OTP sent to verified Email
  - Login normal or with Google
  - Register with OTP to verify Email
  - Checkout with COD or VNPay payment method
  - Messenger and Zalo chatbox
  - Use Redux to store data across components
- Admin side:
  - Dashboard with simple revenue, top 5 products by sold amount
  - Add-Edit categories
  - Add-Edit products
  - Show customers
  - Show-Update orders
  - Admin's account: `tuananh` | Password: `1234567`

### How to run this repository on localhost
- If somehow the deploy link died, u can run this repo on localhost.
- After download and extract, you just need to type in the terminal _(navigate terminal to the folder contains README.md file)_ following command:  
  - `npm install` and wait for the library installed then type following command:  
  - `npm start` and the project will run on `http://localhost:3000` _(on default setting)_  
