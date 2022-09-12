import React from 'react';
import Button from 'antd/lib/button';

import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import "./roll.css";

class Roll extends React.Component {
    render() {
        return (
            <OverPack style={{ overflow: 'hidden', height: 540 }} >
                <div className='home-page'>
                    <QueueAnim
                        className='ant-row'
                        key="queue"
                        leaveReverse
                        style={{ float: 'left', position: 'relative', left: '25%' }}
                    >
                        <div key="0" style={{position:"relative",float:"left",margin:"0 5px 0 0"}}>
                            <div className="ant-col page1-item ant-col-xs-24 ant-col-md-8"
                                 style={{opacity:1}}
                            >
                                <a className="page1-item-link" href="/docs/introduce-cn">
                                    <div className="point-wrapper"></div>
                                    <div className="page1-item-img"><img
                                        src="https://gw.alipayobjects.com/zos/rmsportal/QCcDSfdbCIbVSsUZJaQK.svg" alt="img"/>
                                    </div>
                                    <div className="page1-item-title">设计指引</div>
                                </a>
                            </div>
                        </div>
                        <div key="1" style={{position:"relative",float:"left",margin:"0 5px 0 0"}}>
                            <div className="ant-col page1-item ant-col-xs-24 ant-col-md-8"
                                 style={{opacity:1}}><a className="page1-item-link"
                                                        href="/docs/download-cn">
                                <div className="point-wrapper"></div>
                                <div className="page1-item-img"><img
                                    src="https://gw.alipayobjects.com/zos/rmsportal/hMSnSxMzmiGSSIXxFtNf.svg" alt="img"/>
                                </div>
                                <div className="page1-item-title">Sketch 资源包</div>
                            </a></div>
                        </div>
                        <div key="2" style={{position:"relative",float:"left",margin:"0 5px 0 0"}}>
                            <div className="ant-col page1-item ant-col-xs-24 ant-col-md-8"
                                 style={{opacity:1}}><a className="page1-item-link"
                                                        href="/docs/guide/layout-cn">
                                <div className="point-wrapper"></div>
                                <div className="page1-item-img"><img
                                    src="https://gw.alipayobjects.com/zos/rmsportal/OMEOieDFPYDcWXMpqqzd.svg" alt="img"/>
                                </div>
                                <div className="page1-item-title">响应式布局</div>
                            </a></div>
                        </div>


                    </QueueAnim>

                </div>




            </OverPack>
        );
    }
}
export default Roll;