/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Menu } from 'antd';

const NavbarComponent = props => (
  <Menu
    theme="light"
    mode="horizontal"
    defaultSelectedKeys={['1']}
    style={{ lineHeight: '64px' }}
  >
    <Menu.Item key="1">nav 1</Menu.Item>
    <Menu.Item key="2">nav 2</Menu.Item>
    <Menu.Item key="3">nav 3</Menu.Item>
  </Menu>
);

export default NavbarComponent;
