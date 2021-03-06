import React, { Component } from 'react';
import { actions, smart, Link, urlFor } from 'cat-eye';
import { Layout, Dropdown, Menu, Icon, Modal } from 'antd';
import style from './style';
import avatar from 'styles/images/avatar.png';
const { Header } = Layout;

const HeaderWrapper = props => {
  const menu = (
    <Menu className={style['account-menu']}>
      <Menu.Item>
        <Link to={urlFor('main.home')}>
          <Icon type="bars" /> 版本履历
        </Link>
      </Menu.Item>
      <Menu.Item disabled>
        <Link to={urlFor('main.home')}>
          <Icon type="setting" /> 系统设置
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <div onClick={props.logout}>
          <Icon type="logout" /> 退出系统
        </div>
      </Menu.Item>
    </Menu>
  );
  return (
    <Header className={style.header}>
      <div className={style.right}>
        <Dropdown overlay={menu}>
          <div className={style.account}>
            <img src={avatar} alt="" className={style.avatar} />
            <span>{props.user.name}</span>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default smart(
  state => {
    return {
      user: state.user.data
    };
  },
  props => {
    return {
      logout() {
        actions.user.logout();
      }
    };
  }
)(HeaderWrapper);
