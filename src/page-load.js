import "./style.css";

const pageLoad = () => {
  const makeHeader = () => {
    header = document.createElement("header");

    logo = document.createElement("div");

    headerElements = document.createElement("ul");
    home = document.createElement("li");
    menu = document.createElement("li");
    contact = document.createElement("li");

    logo.innerHTML = "Restaurant";

    home.innerHTML = "Home";
    menu.innerHTML = "Menu";
    contact.innerHTML = "Contact";

    headerElements.appendChild(home);
    headerElements.appendChild(menu);
    headerElements.appendChild(contact);

    return header;
  };

  const makeMain = () => {
    main = document.createElement("main");

    return main;
  }

  const makeFooter = () => {
    footer = document.createElement("footer");
    return footer;
  }

  const makePage = () => {
    page = document.getElementById("content");
    page.appendChild(makeHeader());
    page.appendChild(makeMain());
    page.appendChild(makeFooter());
    return page;
  };

  return {
    makePage,
  };
};

