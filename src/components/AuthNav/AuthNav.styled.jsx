import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const LinkStyled = styled(NavLink)`
  display: inline-block;
  font-family: 'Alkatra', sans-serif;
  font-size: 20px;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  &.active {
    color: #f08307;
  }
`;
