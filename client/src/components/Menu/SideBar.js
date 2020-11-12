import React from 'react'
import { Menu } from 'antd';
import {
  AudioOutlined,
  CustomerServiceOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom'

import {
  StyledInput,
  StyledTitle,
  SearchIcon,
  StyledMenu,
} from './styles'


export const SideBar = () => {
  return (
    <StyledMenu mode="inline">
      <StyledTitle>Music Library</StyledTitle>
      <StyledInput placeholder="Rechercher" prefix={<SearchIcon />} />
      <Menu.Item style={{ background: "none" }} key="Artistes">
        <Link style={{ color: "white" }} to="/artistes">
          <AudioOutlined />
        Artistes
      </Link>
      </Menu.Item>
      <Menu.Item style={{ background: "none" }} key="Albums">
        <Link style={{ color: "white" }} to="/albums">
          <GlobalOutlined />
        Albums
          </Link>
      </Menu.Item>
      <Menu.Item style={{ background: "none" }} key="Morceaux">
        <Link style={{ color: "white" }} to="/songs">
          <CustomerServiceOutlined />
        Morceaux
          </Link>
      </Menu.Item>
    </StyledMenu >
  )
}
