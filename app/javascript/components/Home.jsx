import Header from "./Header";
import { Layout } from "antd";
import Security from "./Securities";
import React from "react";

const { Content, Footer } = Layout;

export default () => (
  <Layout className="layout">
    <Header />
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content" style={{ margin: "100px auto" }}>
        <h1>Security concerns</h1>
        <Beers />
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>© obar3 2021.</Footer>
  </Layout>
);
