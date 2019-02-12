let products = [{
    id: 1,
    name: 'FruitLoop',
    img: './images/cereal/fruitloops.jpg',
    category: 'Cereal'
  },
  {
    id: 2,
    name: 'Fruits',
    img: './images/cereal/fruits.jpg',
    category: 'Cereal'
  },
  {
    id: 3,
    name: 'Oatmeal',
    img: './images/cereal/oatmeal.jpg',
    category: 'Cereal'
  },
  {
    id: 4,
    name: 'Round',
    img: './images/cereal/roundup.jpg',
    catergory: 'Cereal'
  },

  {
    id: 5,
    name: 'Schumer',
    img: './images/cereal/oatmeal.jpg',
    category: 'Cereal'
  },

  {
    id: 6,
    name: 'Blue',
    img: './images/candy/blue.jpg',
    category: 'Candy'
  },
  {
    id: 7,
    name: 'Bluk',
    img: './images/candy/bulk.jpeg',
    category: 'Candy'
  },

  {
    id: 8,
    name: 'Red',
    img: './images/candy/red.jpg',
    category: 'Candy'
  },

  {
    id: 9,
    name: 'Sweet',
    img: './images/candy/sweet.jpeg',
    category: 'Candy'
  },

  {
    id: 10,
    name: 'Apple',
    img: './images/juice/apple.jpg',
    category: 'Juice'
  },

  {
    id: 11,
    name: 'Beet',
    img: './images/juice/beet.jpeg',
    category: 'Juice'
  },

  {
    id: 12,
    name: 'Celery',
    img: './images/juice/celery.jpg',
    category: 'Juice'
  },

  {
    id: 13,
    name: 'Cider',
    img: './images/juice/cider.jpg',
    category: 'Juice'
  },

  {
    id: 14,
    name: 'Pineapple',
    img: './images/juice/pineapple.jpeg',
    category: 'Juice'
  },

  {
    id: 15,
    name: 'Cande',
    img: './images/candy/Cande.jpg',
    category: 'Candy'
  },

  {
    id: 16,
    name: 'Red',
    img: './images/candy/red.jpg',
    category: 'Candy'
  }
];
// Grabing Buttons
const cereal = document.querySelector('#cereal');
const juice = document.querySelector('#juice');
const candy = document.querySelector('#candy');

let productOutput = document.querySelector('#productOutput');

// TODO: wrap this in a function that is called when a category button is pressed. Each button should load the right category
// - no items should display on page load
// - when a user clicks a category button, display the items in the category section

function displayImages() {
  products.map(product => {
    let img = document.createElement('img');
    img.src = product.img;
    productOutput.append(img);
  });
}

// TODO: load the right category  on each button when it is clicked
cereal.addEventListener('click', e => {
  let cerealProduct = getItemsByCategory('Cereal');
  let ul = document.getElementById('prodList');

  // Clear the div before it starts
  ul.innerHTML = "";

  // loop through each category and print out images
  cerealProduct.forEach(cereal => {
    let li = document.createElement('li');
    let img = document.createElement('img');
    // set the attribute to 
    li.setAttribute('id', cereal.id);
    img.setAttribute('src', cereal.img);
    img.setAttribute('id', cereal.id);
    li.appendChild(document.createTextNode(cereal.name));
    li.appendChild(img);
    ul.appendChild(li);
    console.log(li);
  });

});

// Juice

juice.addEventListener('click', e => {
  let juiceProduct = getItemsByCategory('Juice');
  let ul = document.getElementById('prodList');

  // Clear the div before it starts
  ul.innerHTML = "";

  // loop through each category and print out images
  juiceProduct.forEach(juice => {
    let li = document.createElement('li');
    let img = document.createElement('img');
    // set the attribute to 
    li.setAttribute('id', juice.id);
    img.setAttribute('src', juice.img);
    img.setAttribute('id', juice.id);
    li.appendChild(document.createTextNode(juice.name));
    li.appendChild(img);
    ul.appendChild(li);

  });

});


// Candy



candy.addEventListener('click', e => {
  let candyProduct = getItemsByCategory('Candy');
  let ul = document.getElementById('prodList');

  // Clear the div before it starts
  ul.innerHTML = "";

  // loop through each category and print out images
  candyProduct.forEach(candy => {
    let li = document.createElement('li');
    let img = document.createElement('img');
    // set the attribute to 
    li.setAttribute('id', candy.id);
    img.setAttribute('src', candy.img);
    img.setAttribute('id', candy.id);
    li.appendChild(document.createTextNode(candy.name));
    li.appendChild(img);
    ul.appendChild(li);

  });

});


// 

// juice.addEventListener('click', e => {
//   let juiceProduct = getItemsByCategory('Juice');
//   let ul = document.getElementById('prodList');

//   // Clear the div before it starts
//   ul.innerHTML = "";

//   // loop through each category and print out images
//   juiceProduct.forEach(juice => {
//     let li = document.createElement('li');
//     let img = document.createElement('img');
//     // set the attribute to 
//     li.setAttribute('id', juice.id);
//     img.setAttribute('src', juice.img);

//     li.appendChild(document.createTextNode(juice.name));
//     li.appendChild(img);
//     ul.appendChild(li);

//   });

// });



// Add the event listener to each ul 
document.getElementById('prodList').addEventListener('click', e => {
  let addProd = products.filter(product => {
    return product.id == e.target.id;
  });
  addItemToShoppingCart(addProd[0]);
});

//  getcategory to get specific category of products
const getItemsByCategory = category =>
  products.filter(product => product.category === category);

let shoppingCartItems = [];
// //  Add items to the shopping card
function addItemToShoppingCart(product) {
  let foundItem = shoppingCartItems.find(item => product.id === item.id)
  if (product && !foundItem)
    shoppingCartItems.push(product);
  console.log(shoppingCartItems)
}


// TODO: when I click a single item, display the name of the item in the cart
// - when a user clicks an item, console log the name
// - when a user clicks an item, append the name to the cart
// - when a user clicks an item, make an image show

// TODO:

// //  Add items to the shopping card
// function addItemToShoppingCart(product) {
//   // for (let i = 0; i < products.length; i++) {
//   //   //  if the product id is a product
//   //   if (products[i].id === id) {
//   //  if we found the product item array add into shopping carditems
//   shoppingCartItems.push(product);
//   //     //  remove item from product array
//   //     products.splice(i, 1);
//   //   }
//   // }
// }
// addItemToShoppingCart(2);
// console.log(products);
// console.log(shoppingCartItems);

// //  remove item from the shoppingCard
// function removeItemFromShoppingCart(id) {
//   for (let i = 0; i < shoppingCartItems.length; i++) {
//     if (shoppingCartItems[i].id === id) {
//       // add items to the products
//       products.push(shoppingCartItems[i]);
//       // remove items from the shopping card
//       shoppingCartItems.splice(i, 1);
//     }
//   }
// }
// removeItemFromShoppingCart(4);
// console.log(shoppingCartItems);

// //updatPage function
// function upadatePage() {
//   let imageEle = products.map(product => `<img src="${product.img}">`).join('');
// }
// upadatePage();

// //  addding and event listener
// cereal.addEventListener('click', e => {
//   // products.map(product => {
//   //     let img = document.createElement('img');
//   //     img.src = product.img
//   //     productOutput.appendChild(img);
//   // })
//   console.log(e.target);
//   // e.preventDefault();
//   // let category = e.target.innerText;
//   // filterItem(category);
// });

// // Event listener to juice button
// juice.addEventListener('click', e => {
//   let images = e.target.innerText;
//   filterItem(images);
//   upadatePage();
// });
// // Event listener on  candy button
// candy.addEventListener('click', e => {
//   let images = e.target.innerText;
//   filterItem(images);
//   upadatePage();
// });

// //get elements return the array of items in those category
// // productOutput.innerHTML = getItemsByCategory(category)
// //   .map(product => `<img src="${product.img}"`)
// //   .join('');
// // shoppingCartItems.innerHTML = shoppingCartItems
// //   .map(item => `<h2>"${item.name} </h2>`)
// //   .join('');

// function getItemsByCategory(category) {
//   //products.filter(product.category === category)

//   let filtered = products.filter(product => {
//     product.category === category;
//   });
//   // products.filter(function(product) {
//   console.log(filtered);
//   // })
// }

// // shows the product in the selected category
// function filterItem(category) {
//   console.log(category);
// }