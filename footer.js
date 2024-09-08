class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
          footer {
            align-items: center;
	background-color: #dfdfe2;
	bottom: 0;
	color: #666666;
	display: flex;
	font-size: 20px;
	height: 80px;
	justify-content: center;
	position: flexible;
	text-transform: uppercase;
	width: 100%;
	z-index: 1;
          }
  
          ul li {
            list-style: none;
            display: inline;
          }
  
          a {
            margin: 0 15px;
            color: inherit;
            text-decoration: none;
          }
  
          a:hover {
            padding-bottom: 5px;
            box-shadow: inset 0 -2px 0 0 #333;
          }
  
          .social-row {
            font-size: 20px;
          }
  
          .social-row li a {
            margin: 0 15px;
          }
        </style>
        <footer>
          <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="aboutus.html">About Us</a></li>
            <li><a href="register.html">Register</a></li>
          </ul>
          <ul class="social-row">
            <li><a href="https://github.com/my-github-profile"><i class="fab fa-github"></i></a></li>
            <li><a href="https://twitter.com/my-twitter-profile"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/in/my-linkedin-profile"><i class="fab fa-linkedin"></i></a></li>
          </ul>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);