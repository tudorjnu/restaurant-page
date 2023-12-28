import "./style.css";

const pageLoad = () => {

  var activeTab = "home";

  const domElements = {
    tabButtons: null,
    main: null,
    tabContent: {
      get home() {
        return makeHome();
      },
      get menu() {
        return makeMenu();
      },
      get contact() {
        return makeContact();
      },
    },
  };

  const makeHeader = () => {
    const header = document.createElement("header");

    const logo = document.createElement("div");
    logo.setAttribute("id", "logo");
    header.appendChild(logo);
    logo.innerHTML = "Restaurant";

    const headerElements = document.createElement("nav");
    headerElements.setAttribute("id", "headerElements");

    const home = document.createElement("button");
    home.innerHTML = "Home";
    home.setAttribute("class", "tab current");
    headerElements.appendChild(home);

    const menu = document.createElement("button");
    menu.innerHTML = "Menu";
    menu.setAttribute("class", "tab");
    headerElements.appendChild(menu);

    const contact = document.createElement("button");
    contact.innerHTML = "Contact";
    contact.setAttribute("class", "tab");
    headerElements.appendChild(contact);

    header.appendChild(headerElements);
    domElements.tabButtons = headerElements.querySelectorAll(".tab");

    return header;
  };

  const makeMain = () => {
    const main = document.createElement("main");
    domElements.main = main;
    return main;
  }

  const makeFooter = () => {
    const footer = document.createElement("footer");
    return footer;
  }

  const makePage = () => {
    const page = document.getElementById("content");
    page.appendChild(makeHeader());
    page.appendChild(makeMain());
    page.appendChild(makeFooter());

    return page;
  };

  const removeActiveTab = () => {
    const tabs = domElements.tabButtons;
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("current");
    }
  };

  const setActiveTab = (tab) => {
    removeActiveTab();
    console.log(tab);
    activeTab = tab.innerHTML.toLowerCase();
    tab.classList.add("current");
    render();
  };

  const bindEvents = () => {
    const addTabListeners = () => {
      const tabs = domElements.tabButtons;
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", function() {
          setActiveTab(tabs[i]);
        });
      }
    };

    addTabListeners();
  };

  const render = () => {
    console.log(activeTab);
    domElements.main.innerHTML = "";
    domElements.main.appendChild(domElements.tabContent[activeTab]);
  };

  const init = () => {
    makePage();
    bindEvents();
    render();
  };

  return {
    init,
  };
};

const makeHome = () => {

  const makeHomeContainer = () => {
    const container = document.createElement("div");
    container.classList = "mainContainer"
    return container;
  };

  const makeTitle = () => {
    const title = document.createElement("h2");
    title.innerHTML = "Welcome to our restaurant";
    return title;
  };

  const makeDescription = () => {
    const description = document.createElement("section");
    return description;
  }

  const makeTimetable = () => {
    const timetable = document.createElement("section");
    return timetable;
  }

  const makeAddress = () => {
    const address = document.createElement("section");
    return address;
  }

  const container = makeHomeContainer();
  const title = makeTitle();
  const description = makeDescription();
  const timetable = makeTimetable();
  const address = makeAddress();

  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(timetable);
  container.appendChild(address);

  return container;
};

const makeMenu = () => {

  const menuItems = [
    {
      title: "Pizza",
      description: "Pizza with tomato sauce and cheese",
      price: "5€",
    },
    {
      title: "Pasta",
      description: "Pasta with tomato sauce",
      price: "3€",
    },
    {
      title: "Salad",
      description: "Salad with tomato and lettuce",
      price: "2€",
    },
  ];

  const makeMenuItem = (title, description, price) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menuItem");

    const itemTitle = document.createElement("h3");
    itemTitle.innerHTML = title;
    menuItem.appendChild(itemTitle);

    const itemPrice = document.createElement("p");
    itemPrice.classList.add("itemPrice");
    itemPrice.innerHTML = price;
    menuItem.appendChild(itemPrice);

    const itemDescription = document.createElement("p");
    itemDescription.classList.add("itemDescription");
    itemDescription.innerHTML = description;
    menuItem.appendChild(itemDescription);
    return menuItem;
  };

  const makeMenuContainer = () => {
    const container = document.createElement("div");
    container.classList = "mainContainer"
    return container;
  };

  const makeMenu = () => {
    const menu = makeMenuContainer();
    for (let i = 0; i < menuItems.length; i++) {
      const item = makeMenuItem(
        menuItems[i].title,
        menuItems[i].description,
        menuItems[i].price
      );
      menu.appendChild(item);
      console.log(item);
    };
    return menu;
  };

  const menu = makeMenu();
  return menu;
}

const makeContact = () => {

  const makeContainer = () => {
    const container = document.createElement("div");
    container.classList = "mainContainer"
    return container;
  };

  const makeContact = () => {
    const contact = makeContainer();

    const title = document.createElement("h2");
    title.innerHTML = "Contact us";
    contact.appendChild(title);

    const address = document.createElement("p");
    address.innerHTML = "Address: 1234 Main Street";
    contact.appendChild(address);

    return contact;
  };

  const contact = makeContact();
  return contact;
}


export default function initializePage() {
  pageLoad().init();
}
