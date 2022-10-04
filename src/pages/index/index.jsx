import starry from "../../images/starry.jpg"
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import Typer from "../Typer";
import Roll from "../Roll";
const { Header, Content, Footer } = Layout;



const Index = (props) => {
    const starryUrl =starry;

    return (
        <div>
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


            </Layout>



        </div>




    )

}


export default Index;