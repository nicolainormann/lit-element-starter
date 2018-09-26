import { LitElement, html } from "@polymer/lit-element";

class ExampleElement extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
            <style>
                .example {
                    font-size: 120px;
                    background-color: #000;
                    color: #fff;
                    padding: 30px;
                }
            </style>
            <div class="example">
                Lit Element
            </div>
        `;
    }
}

customElements.define("app-example", ExampleElement);