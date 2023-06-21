import { createRoot } from "react-dom/client";
import SouravContent from "./souravContent";

class SouRav extends HTMLElement {
  reactShadowRoot;

  static get observedAttributes() {
    return ['name'];
  }

  constructor(){
    super()

    this.reactShadowRoot = createRoot(this);
  }

  connectedCallback() {
    const name = this.getAttribute("name");

    this.render({name: name})
  }

  disconnectedCallback() {
    this.reactShadowRoot.unmount()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "name":
        this.render({name: newValue})
        break;

      default:
        break;
    }
  }

  render(props) {
    this.reactShadowRoot.render(<SouravContent name={props.name} />);
  }
}

customElements.define("sou-rav", SouRav);
