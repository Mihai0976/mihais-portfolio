const menu = [
  {
    id: 1,
    title: "Introduction to AI",
    category: "AI",
    price: 1000,
    img: "./images/ai.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse impedit, iure necessitatibus neque iste? `,
  },
  {
    id: 2,
    title: "Software Engineering",
    category: "software-development",
    price: 2000,
    img: "./images/softeng1.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse impedit, iure necessitatibus neque iste?`,
  },
  {
    id: 4,
    title: "Advanced AI Dev With Python",
    category: "AI",
    price: 2500,
    img: "./images/aipython.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse impedit, iure necessitatibus neque iste?`,
  },
  {
    id: 3,
    title: "System requirements and Product Management",
    category: "Management",
    price: 2000,
    img: "./images/projmanagement.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse impedit, iure necessitatibus neque iste?`,
  },
  {
    id: 5,
    title: "Cloud Development With AWS",
    category: "software-development",
    price: 800,
    img: "./images/cloud.png",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse impedit, iure necessitatibus neque iste?`,
  },
  {
    id: 6,
    title: " Agile Methodology in Project Management",
    category: "Management",
    price: 1500,
    img: "./images/agile.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse impedit, iure necessitatibus neque iste?`,
  },
  {
    id: 7,
    title: "Machine Learning With Python",
    category: "AI",
    price: 1900,
    img: "./images/machine.png",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse impedit, iure necessitatibus neque iste? `,
  },
  {
    id: 8,
    title: "Data Base Design",
    category: "software-development",
    price: 700,
    img: "./images/databasedesign.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse impedit, iure necessitatibus neque iste? `,
  },
  {
    id: 9,
    title: "Digital Product Management",
    category: "Management",
    price: 2100,
    img: "./images/digitalproc.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse impedit, iure necessitatibus neque iste?`,
  },
  {
    id: 10,
    title: "Beginner To Professional UX Designer",
    category: "ui/ux",
    price: 2600,
    img: "./images/uxdesigner.jpg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse impedit, iure necessitatibus neque iste?`,
  },
];


const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");



//load items
window.addEventListener('DOMContentLoaded', function () {
  displatMenuItems(menu);
  displayMenuButtons();
  selectButtons()
  //console.log(categoryBtns);

});


function displatMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return ` 
    <article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
};

//display buttons dinamicaly
function displayMenuButtons() {
  const categories = menu.reduce(function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, ["All"]);
  //console.log(categories);
  const categoryBtns = categories.map(function (category) {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
  }).join("");
  container.innerHTML = categoryBtns;
};

//select the buttons
function selectButtons() {
  
  const filterBtns = container.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        };
      });
      if (category === 'All') {
        displatMenuItems(menu);
      } else {
        displatMenuItems(menuCategory);
      };
    });
  });
  
}