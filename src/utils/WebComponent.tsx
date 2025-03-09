import { createRoot } from "react-dom/client";

export class WebComponent {
  static defineReactComponent(ReactComponent: React.ReactNode, name: string) {
    // See: https://stackoverflow.com/a/67009105
    const ReactWebComponent = class extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        const shadowRoot = createRoot(this.attachShadow({ mode: "open" }));

        shadowRoot.render(ReactComponent);
      }
    };

    customElements.define(name, ReactWebComponent);
  }
}
