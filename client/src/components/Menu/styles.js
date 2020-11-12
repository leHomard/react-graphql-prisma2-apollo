import { Menu, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const StyledMenu = styled(Menu)`
  padding-top: 30px;
  width: 256px;
  background-color: #2e2e2e;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;

  .ant-menu {
    .ant-menu-item {
      a {
        color: #fff
      }
    }
  }
`;

export const StyledTitle = styled.h2`
  margin-left: 25px;
  padding-bottom: 2rem;
  color: #2194ff;
  align-self: flex-start;
`;

export const StyledInput = styled(Input)`
  width: 85%;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  border-radius: 2rem;
  background-color: #27241c;
  border-color: #27241c;
  .ant-input {
    background-color: #27241c;
    font-size: 11px;
    color: white;
  }
  .ant-input-prefix {
    .anticon {
      color: white;
    }
  }
`;

export const SearchIcon = styled(SearchOutlined)`
  .anticon anticon-search sc-eCssSg hEeToF {
    color: 'white'
  }
`;