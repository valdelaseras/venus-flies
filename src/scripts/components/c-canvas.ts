const CCANVAS_TEMPLATE = `
<div>
    <canvas class="canvas"
            height="800"
            width="1200">
    </canvas>
    
    <div class="overlay">
        <span class="counter"></span>
    </div>
</div>`;

export class CCanvas extends HTMLElement {
    constructor() {
        super();
    }

    buildTemplate() : void {
        this.innerHTML = CCANVAS_TEMPLATE;

        const span = document.querySelector('.overlay > span');
        this.countDown( ( span as HTMLElement ) );
    }

    countDown( elm: HTMLElement ) : void {
        let counter = 6;

        const i = setInterval(() => {
            counter -= 1;
            elm.innerText = counter.toString();

            if ( counter === 0 ){
               clearInterval( i );

               elm.innerText = "START";

               const ii = setInterval(() => {
                   clearInterval( ii );
                   this.querySelector('.overlay')!.remove();
               }, 500)
           }
       }, 500);
    }
}

customElements.define('c-canvas', CCanvas );
