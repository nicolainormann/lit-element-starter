import { LitElement, html, customElement, css } from "lit-element";

@customElement("app-example")
export class ExampleElement extends LitElement {
    static styles = css`
        .example {
            font-size: 120px;
            background-color: #000;
            color: #fff;
            padding: 30px;
        }
    `;

    render() {
        return html`
            <div class="example">
                Lit Element
            </div>
        `;
    }
}