import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  FormOutlined,
  MonitorOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import "./index.css";
import "./App.css";
import "antd/dist/antd.css";
import imagenes from './assets/img/imagenes';




const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const App = () => {

  const [collapsed, setCollapsed] = useState (false)

  const onCollapse = collapsed => setCollapsed(collapsed);
 

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<DesktopOutlined />}>
              Home
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Login">
              <Menu.Item key="3">Perfil</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<FormOutlined />} title="Registro">
              <Menu.Item key="6">formulario</Menu.Item>
              <Menu.Item key="7">Registrar Vacunacion</Menu.Item>
              <Menu.Item key="9">Registrar Pruebas</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<MonitorOutlined />} title="Consultas">
              <Menu.Item key="10">Certificado</Menu.Item>
            </SubMenu>
            <Menu.Item key="11" icon={<QuestionCircleOutlined />}>
              Ayuda
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
          <div class='container'>
            <img src={imagenes.img1} class="img"/>
          </div>
          </Header>  
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Login</Breadcrumb.Item>
              <Breadcrumb.Item>Perfil</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Mi Corona Ticket
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>UTP/MINTIC ciclo 4 Design ©2020 Created by grupo 2</Footer>
        </Layout>
      </Layout>
    );
  }

export default App;

