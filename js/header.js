class Header extends HTMLElement {
  constructor(){
    super();
  }

  connectedCallback() {
      this.innerHTML = `
        <ul class="menu horizontal">
          <li class="menu horizontal"><a href="../index.html">home</a></li>
        </ul>        
      `;
    }
  }

customElements.define('main-header', Header);