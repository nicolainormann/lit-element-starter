import { LitElement, html } from "@polymer/lit-element";

class ExampleElement extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
            <link href="dist/css/main.css" rel="stylesheet" />
            <div class="example">
                Example
            </div>
        `;
    }
}

customElements.define("app-example", ExampleElement);