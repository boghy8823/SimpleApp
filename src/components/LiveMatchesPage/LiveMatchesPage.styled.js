import styled from 'styled-components';

export const ArticleHeader = styled.div`
background: #fff;
width: 100%;
overflow: hidden;
margin: 0 15px;
text-align: left;


h1 {
    width: 100%;
    text-align: left;
  margin: 16px 0;
  font-size: 22px;
  font-weight: bold;
}

.preamble { 
    width: 100%;
  margin: 20px 0;
}
`;

export const ArticleContent = styled.div`
  border-left: solid 1px #ccc;
  margin-left: 8px;
  padding: 0 16px 8px 16px;
  text-align: left;

  h2 {
        font-size: 15px;
        margin: 4px 0 16px 0;
        font-weight: bold;
  }
`;