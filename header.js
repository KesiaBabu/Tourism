class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        *, body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

/* Navigation */
.navigation-header {
  background-color: black;
  padding: 0 15px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo-container > a {
  color: ghostwhite;
  text-decoration: none;
  font-weight: 700;
  font-size: 26px;
}
.navigation-items {
  display: flex;
  gap: 40px;
}
.navigation-items > a {
  color: ghostwhite;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: .4s ease-in-out;
}
.navigation-items > a:hover {
  color: white;
}
.hamburger {
  display: none;
  font-size: 20px;
  font-weight: 800;
  color: white;
}
@media screen and (max-width:768px) {
  .hamburger {
    display: flex;
    cursor: pointer;
  }
  .hamburger #closeHam {
    display: none;
  }
  .navigation-items {
    display: none;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 0;
    top: 58px;
    background-color: rgb(73, 51, 153);
    width: 100%;
    height: calc(100vh - 58px);
    padding-top: 60px;
    gap: 10vh;
  }
}
        </style>
       <header class="navigation-header">
    <nav>
        <div class="logo-container">
            <a href="home.html">Kerala Tourism</a>
        </div>
        <div class="navigation-items" id="navigation-items">
            <a href="home.html">HOME</a>
            <a href="aboutus.html">ABOUT US</a>
            <a href="register.html">REGISTER</a>
        </div>
        <div class="hamburger">
            <span id="openHam">&#9776;</span>
            <span id="closeHam">&#x2716;</span>
        </div>
    </nav>
   </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);