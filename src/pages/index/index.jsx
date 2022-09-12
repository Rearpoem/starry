import starry from "../../images/starry.jpg"
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import Typer from "../Typer";
import Roll from "../Roll";
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
                    style={{padding: 0,height:1080,width:"100%",display: "flex",alignItems:"center",justifyContent:"center"}}
                >
                <Typer/>
                </body>
            </Content>

            <Roll/>
            {/*<MyCard/>*/}

            {/*<MyCard/>*/}
            {/*<MyCard2/>*/}
            {/*<Footer*/}
            {/*    // style={{*/}
            {/*    //     textAlign: 'center',*/}
            {/*    //     height:1000,*/}
            {/*    // }}*/}
            {/*    style={{height:1000,width:"100%",display: "flex",alignItems:"center",justifyContent:"center"}}*/}
            {/*>*/}

            {/*    <MyOverPack/>*/}
            {/*    <Body/>*/}

            {/*</Footer>*/}
        </Layout>


    )

}


export default Index;