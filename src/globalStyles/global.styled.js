import styled from 'styled-components';

export const Wrapper = styled.div`
background-image: radial-gradient(#2f8e2c,#2e7423);
background-color: #2e7423;
text-align: center;
`;

export const Header = styled.div`
text-align: left;
padding: 20px 0;
`;

export const Logo = styled.div`
background: url(${props => props.logo}) no-repeat;
height: 33px;
background-size: 200px 33px;
width: 200px;
text-indent: -999em;
`;

export const Nav = styled.div`
background: #222;
width: 100%;
ul {
  text-align: left;
  padding: 0;
  list-style: none;
  margin: 0;
}

ul li {
  margin: 0;
  padding: 12px 0 12px 4px;
}

ul li a {
  color: #fff;
  text-decoration: none;
}
`;

export const PageWrapper = styled.div`
padding: 8px 16px 16px;
margin: 16px 0px;
background: #fff;
border-radius: 4px;
overflow: hidden;
`;

export const Footer = styled.div`
background: #333;
color: #999;

.inner {
  text-align: left;
  margin: 0 auto;
}

.inner > p {
  padding: 16px 8px;
}
`;