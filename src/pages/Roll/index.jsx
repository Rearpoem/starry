import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import "./roll.css";

class Roll extends React.Component {
    render() {
        return (
            <OverPack
                style={{ overflow: 'hidden', height: 540 }}
            >
                <div className='home-page'>
                    <div className='page1-content'>
                        <QueueAnim
                            key="queue"
                            style={{display:'flex',justifyContent:'space-evenly'}}
                            delay={100}
                            interval={200}
                            duration={1000}
                            type='scale'
                            leaveReverse
                            ease='easeOutBack'
                        >
                           <div key="0" className="page1-item">
                               <a className="page1-item-link" >
                                   <div className="page1-item-img">
                                       <img src="https://gw.alipayobjects.com/zos/rmsportal/QCcDSfdbCIbVSsUZJaQK.svg" alt="img"/>
                                   </div>
                                   <div className="page1-item-title">区域1</div>
                               </a>
                           </div>

                           <div key="1" className="page1-item">
                               <a className="page1-item-link" >
                                   <div className="page1-item-img">
                                       <img src="https://gw.alipayobjects.com/zos/rmsportal/QCcDSfdbCIbVSsUZJaQK.svg" alt="img"/>
                                   </div>
                                   <div className="page1-item-title">区域2</div>
                               </a>
                           </div>

                           <div key="2" className="page1-item">
                               <a className="page1-item-link">
                                   <div className="page1-item-img">
                                       <img src="https://gw.alipayobjects.com/zos/rmsportal/QCcDSfdbCIbVSsUZJaQK.svg" alt="img"/>
                                   </div>
                                   <div className="page1-item-title">区域3</div>
                               </a>
                           </div>
                            <div key="4" className="page1-item">
                                <a className="page1-item-link">
                                    <div className="page1-item-img">
                                        <img src="https://gw.alipayobjects.com/zos/rmsportal/QCcDSfdbCIbVSsUZJaQK.svg" alt="img"/>
                                    </div>
                                    <div className="page1-item-title">区域4</div>
                                </a>
                            </div>

                        </QueueAnim>
                    </div>


                </div>




            </OverPack>
        );
    }
}
export default Roll;