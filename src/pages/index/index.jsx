import starry from "../../images/starry.jpg"
import Typed from "typed.js";
import bk from './bk.css';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import Typer from "../Typer";
const { Header, Content, Footer } = Layout;



const Index = (props) => {
    const starryUrl =starry;

    return (

        <Layout className="layout">
            <Header>
                FHun Starry
            </Header>
            <Content
                style={{height:"100%"}}
            >
                <body
                    background = {starryUrl}
                    style={{padding: 0,height:1000,width:"100%",display: "flex",alignItems:"center",justifyContent:"center"}}
                >
                {/*<div style={{color:"white",fontSize:80,margin:"auto"}}>如果愿望可以实现，我仍想与你共度余生</div>*/}
                <Typer/>
                </body>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                FHun Starry
            </Footer>
        </Layout>


    )

}


export default Index;