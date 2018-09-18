import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.div`
  align-items: center;
  display: flex;
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 500;
  margin-right: -10px;
`;
export const CategoryLink = styled(Link)`
  align-items: center;
  color: inherit;
  display: flex;
  height: 30px;
  margin-left: 30px;
  padding: 0 10px;
  text-decoration: none;
`;
