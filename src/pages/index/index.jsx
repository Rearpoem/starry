import starry from "../../images/starry.jpg"
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import Typer from "../Typer";
import Body from "../Body";
import OverPack from "../OverPack";
import MyOverPack from "../OverPack";
import MyCard from "../MyCard";
const { Header, Content, Footer } = Layout;



const Index = (props) => {
    const starryUrl =starry;

    return (

        <Layout className="layout">
            {/*<Header>*/}
            {/*    FHun Starry*/}
            {/*</Header>*/}
            <Content
                style={{height:"100%",width:"100%"}}
            >
                <body
                    background = {starryUrl}
                    style={{padding: 0,height:1000,width:"100%",display: "flex",alignItems:"center",justifyContent:"center"}}
                >
                {/*<div style={{color:"white",fontSize:80,margin:"auto"}}>如果愿望可以实现，我仍想与你共度余生</div>*/}
                <Typer/>
                </body>
            </Content>
            <MyCard/>

            <MyCard/>
            <Footer
                // style={{
                //     textAlign: 'center',
                //     height:1000,
                // }}
                style={{height:1000,width:"100%",display: "flex",alignItems:"center",justifyContent:"center"}}
            >

                <MyOverPack/>
                <Body/>

            </Footer>
        </Layout>


    )

}


export default Index;