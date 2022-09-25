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
                '如果愿望可以实现，我仍想与你共度余生。^1000',
                '总会有一个温柔的人，给你带来最温柔的月亮。',
                '那不是我的月亮,但的确有一刻月光照在了我的身上。',
            ],
            //打字速度
            typeSpeed: 75,
            //小时速度
            backSpeed: 0,
            //光标
            cursorChar:"_",
            //数组间间隔时间
            startDelay:500,
            //循环
            loop:true,
            //淡出（没搞明白咋弄出效果的）
            fadeOut:true,
            fadeOutDelay:100,
            fadeOutClass:"typed-fade-out",

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
                    <span style={{color:"white",fontSize:50,margin:"auto"}}  ref={el} />
                </div>
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