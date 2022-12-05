const CINSTRUCTIONS_TEMPLATE = `
<div class="column">
    <div class="column">
        <div class="content">
            <h2>How to play</h2>
            
            <ul>
                <li>
                    <p>
                        Each player starts with 20 points and 20 health. If you reach 0 health, you are disqualified from 
                        the match.
                    </p>
                </li>
                <li>
                    <p>
                        The match ends when one team reaches a collective 40 points, or all players on one team have been 
                        disqualified.
                    </p>
                </li>
            </ul>
            
            <div class="instruction-box">
                <div class="content">
                    <h3>...as Venus</h3>
                
                    <p>
                        Use the <span class="highlight bold">spacebar</span> to chomp down on any flies that try to 
                        steal nectar from you. 
                    </p>
                    <p>
                        Be smart about using this ability as you have a cooldown! Your fly trap will close rapidly, but 
                        will take a few seconds to reopen, during which time you cannot shut your trap again. 
                    </p>
                    
                    <ul>
                        <li>
                            <p class="bold green-font">
                                Gain 1 point by chomping down on a fly player
                            </p>
                        </li>
                        <li>
                            <p class="bold red-font">
                                Lose 1 point and 1 health when a fly successfully steals nectar from you! 
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="column">
        <div class="content">
            <div class="instruction-box">
                <div class="content">
                    <h3>...as Fly</h3>
                
                    <p>
                        Use the <span class="highlight bold">arrow keys</span> to move around. Your goal is to fly
                        into the Venus trap and quickly steal the nectar without getting trapped and devoured.
                    </p>
                    
                    <p>
                        Be careful about your flying, you jitter! 
                    </p>
                    
                    <ul>
                        <li>
                            <p class="bold green-font">
                                Gain 1 point by stealing nectar and escaping alive
                            </p>
                        </li>
                        <li>
                            <p class="bold red-font">
                                Lose 1 point and 1 health by getting chomped!
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
           
        </div>
    </div>
</div>
`;

class CInstructions extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = CINSTRUCTIONS_TEMPLATE;
    }
}

customElements.define('c-instructions', CInstructions );
