import Typed from "typed.js";
import React from 'react';


const Typer = (props) => {

    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                '如果愿望可以实现，我仍想与你共度余生'
            ],
            typeSpeed: 100,
            backSpeed: 50,
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])

    return (
        <div>
            <div className="wrap">
                <div>
                    <div style={{color:"white",fontSize:80,margin:"auto"}}  ref={el} />
                </div>
                {/*<button onClick={() => typed.current.toggle()}>Toggle</button>*/}
                {/*<button onClick={() => typed.current.start()}>Start</button>*/}
                {/*<button onClick={() => typed.current.stop()}>Stop</button>*/}
                {/*<button onClick={() => typed.current.reset()}>Reset</button>*/}
                {/*<button onClick={() => typed.current.destroy()}>Destroy</button>*/}
            </div>
        </div>

    );
    // return(
    //     <div>
    //     <div className={bk.bk}></div>
    //     {/*    <span style={{background:"red",}}>1</span>*/}
    //     </div>
    // )


}

export default Typer;