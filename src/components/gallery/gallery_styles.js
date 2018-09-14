import styled from 'styled-components';
import Link from 'gatsby-link';

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  margin-top: 70px;
`;
export const Photo = styled.div`
  ${props => props.src && 'background-image: url(' + props.src + ')'};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 2px 10px #fff;
  margin-bottom: 20px;
  padding-top: 140%;
  transition: box-shadow .1s ease;
  width: 100%;
`;
export const Card = styled(Link)`
  margin-right: 30px;
  text-decoration: none;
  width: 300px;

  &:hover ${Photo} {
    box-shadow: 0 5px 30px rgba(34, 47, 62, .25);
  }
`;
export const Title = styled.span`
  font-family: 'Poppins';
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2em;
`;
