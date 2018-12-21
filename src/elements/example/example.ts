import { LitElement, html, customElement } from "@polymer/lit-element";

@customElement("app-example")
export class ExampleElement extends LitElement {
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