const CCANVAS_TEMPLATE = `
<canvas class="canvas"
        height="800"
        width="1200">
</canvas>`;

export class CCanvas extends HTMLElement {
    constructor() {
        super();
    }

    buildTemplate(){
        this.innerHTML = CCANVAS_TEMPLATE;
    }
}

customElements.define('c-canvas', CCanvas );
