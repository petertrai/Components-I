import './menu.less'

// This is the data we will be using, study it but don't change anything, yet.
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


const menuMaker = (linksArr) => {
  const menuWrapper = document.createElement('div');
  const menuList = document.createElement('ul');
  menuWrapper.appendChild(menuList);
  menuWrapper.classList.add('menu');

  linksArr.forEach((linkText) => {
    const link = document.createElement('li');
    link.textContent = linkText;
    menuList.appendChild(link);
  })

  const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', () => {
    menuWrapper.classList.toggle('menu--open');
})


  return menuWrapper;
}

document.querySelector('.header').appendChild(menuMaker(menuItems))



/*

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
