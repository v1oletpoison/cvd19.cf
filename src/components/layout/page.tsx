import React from "react";
import { Layout, Menu, Drawer, Button, Divider } from "antd";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import "styles/app.css";
import {
  GlobalOutlined,
  BarChartOutlined,
  QuestionCircleOutlined,
  EnvironmentOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { menuInit } from "lib";
import logo from "assets/coronavirus.png";
import { myContext } from "context";
import { SideDrawer } from "./sideDrawer";

const { Content, Sider, Footer } = Layout;
export const Page = ({ children }: React.PropsWithChildren<{}>) => {
  const { pathname } = useLocation();
  const marginClassName: string = pathname.includes("map")
    ? "conentWithoutMargin"
    : "conentWithMargin";
  const defaultItem = menuInit(pathname);
  // TODO: add patreon logo
  return (
    <myContext.Consumer>
      {(context) => (
        <Layout style={{ minHeight: "100vh" }}>
          <Drawer
            title="Data trends in colors"
            placement="left"
            closable={true}
            onClose={context.onClose}
            visible={context.visible?.isVisible}
            width={480}
          >
            <SideDrawer />
          </Drawer>
          <Sider
            collapsed={true}
            style={{ position: "sticky" }}
            className="sider-box-shadow"
          >
            <Menu
              onSelect={context.handleSelect}
              selectable={true}
              focusable={true}
              selectedKeys={[defaultItem]}
              mode="inline"
              style={{ position: "fixed", border: "0" }}
            >
              <div className="logoImg">
                <img
                  src={logo}
                  alt="Covid-19 stats & facts"
                  height={48}
                  width={48}
                />
                <span className="logoText">cvd19.cf</span>
              </div>
              <Menu.Item
                key="main"
                icon={<GlobalOutlined style={{ color: "WHITE" }} />}
              >
                <Link to="/">Status</Link>
              </Menu.Item>
              <Menu.Item
                key="data"
                icon={<BarChartOutlined style={{ color: "WHITE" }} />}
              >
                <Link to="/data">Data</Link>
              </Menu.Item>
              <Menu.Item
                key="map"
                icon={<EnvironmentOutlined style={{ color: "WHITE" }} />}
              >
                <Link to="/map">Map</Link>
              </Menu.Item>
              <Menu.Item
                key="about"
                icon={<QuestionCircleOutlined style={{ color: "WHITE" }} />}
              >
                <Link to="/about">About</Link>
              </Menu.Item>
              <div className="alignBottom">
                <Button
                  className="tinyButton"
                  size="small"
                  onClick={context.showDrawer}
                >
                  Help →
                </Button>
              </div>
            </Menu>
          </Sider>
          <Layout className={marginClassName}>
            <Content>
              <div className={marginClassName}>{children}</div>
            </Content>
            {pathname.includes("map") ? undefined : (
              <Footer>
                <Divider className="divider" />
                <div className="credentials">
                  Made with{" "}
                  <span role="img" aria-labelledby="love">
                    ❤️
                  </span>{" "}
                  by{" "}
                  <a
                    className="credentialsLink"
                    href="https://twitter.com/svirins"
                  >
                    @svirins
                  </a>
                  .
                </div>
                <div className="credentials">
                  {" "}
                  View source{" "}
                  <a href="https://github.com/svirins/cvd19.cf">
                    <GithubOutlined style={{ fontSize: "14px" }} />
                  </a>
                </div>
              </Footer>
            )}
          </Layout>
        </Layout>
      )}
    </myContext.Consumer>
  );
};