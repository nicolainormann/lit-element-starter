class JsonAdapter extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: "open" });
        const template = this.children[0] as any;
        for (let i = 0; i < this.attributes.length; i++) {
            const attr = this.attributes[i];
            template[attr.nodeName] = JSON.parse(attr.nodeValue!);
        }
        shadowRoot.appendChild(template);
    }
}

customElements.define("json-adapter", JsonAdapter);
