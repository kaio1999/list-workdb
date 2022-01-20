import styled from "styled-components";

interface Props {
  display?: any;
  marginLeft?: any;
}

export const Describe = styled.td<Props>`
  width: 20%;
  text-align: center;

  @media (max-width: 800px) {
    display: ${({ display }) => display && `${display}`};
    margin-left: ${({ marginLeft }) => marginLeft && `${marginLeft}`};
    width: 25%;
  }
`;

export const ListDescribe = styled.td<Props>`
  color: black;
  text-transform: uppercase;
  font-family: Lato;
  padding: auto 8px;
  width: 20%;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    display: ${({ display }) => display && `${display}`};
    width: 100%;
    text-align: center;
  }
`;

export const DivName = styled.th`
  margin: 5px 0px;
  display: flex;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 15px;
  font-family: Montserrat;
  background: #ec5c5c;
  color: white;
  justify-content: space-evenly;
  padding: 10px 0;

  @media (max-width: 800px) {
    font-size: 15px;
  }
`;

export const ModalSignUp = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify: content: space-between; 
    padding: 25px 10px;
    width: 65%;

    @media(max-width:800px){
        width: 100%;
        padding: 8px 0px;
    }
`;

export const DivList = styled.table`
    background: #FFFFFF;
    box-shadow:  0 2px 2px 0 rgb(50 50 50 / 15%);
    
  @media (max-width: 800px) {
    .mediaMobile {
      display: none;
    }
  }
`;

export const ListSign = styled.div`
  background: #ec5c5c;
  font-family: Montserrat;
  color: white;
  padding: 10px 10px;
  margin: 10px;

  @media(max-width: 800px){
    padding: 0;
    font-size: 14px;
    margin: 20px 0;
    text-align: center;
    width: 100%;
  }
`;

export const List = styled.tr`
  display: flex;
&:hover {
  background: #BFBFBF;
  transition: all .2s;
}

  a {
    margin: 0;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    cursor: pointer;
  }
`;

const DivGeneral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;

  .Loading {
    margin: 50px 0;
    @media (max-width: 800px) {
      display: flex;
      margin: 190px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const BtnDelete = styled.button<Props>`
  color: black;
  text-transform: uppercase;
  margin-top: 7px;
  font-family: Lato;
  margin-bottom: 7px;
  padding: 5px 8px;
  width: 20%;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  transition: all .2s;
  border: none;
  margin-right: 3px;
  cursor: pointer;

  &:hover {
    background: #BF4B4B;
    color: white;
  }

  @media (max-width: 800px) {
    display: ${({ display }) => display && `${display}`};
    width: 100%;
    text-align: center;
  }
`;

export const DeletModal = styled.div`
    background: #FFFF;
    height: 120px;
    box-shadow: 0 2px 2px 0 rgb(50 50 50 / 15%);
    font-family: Lato;
    display: flex;
    padding: 0px 10px;
    margin: 50px 0;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 0;

        button {
            width: 55%;
        }
    }

    span {
        margin-bottom: 16px;
        font-size: 18px;
    }
`;

export const Button = styled.button`
    font-size: 20px;
    color: white;
    border: none;
    background: rgba(236, 92, 92, 0.7);
    text-transform: uppercase;
    padding: 12px 33px;
    width: 100%;
    cursor: pointer;
    border-radius: 5px;
    transition: all .2s;
    
    &:hover {
        background: #ec5c5c;
    }
`;

export const BtnClean = styled.button`
    display: flex;
    align-self: self-end;
    margin-right: 15px;
    font-size: 15px;
    font-family: Lato;
    color: white;
    border: none;
    background: rgba(236, 92, 92, 0.7);
    text-transform: uppercase;
    padding: 12px 33px;
    cursor: pointer;
    border-radius: 5px;
    transition: all .2s;
    
    &:hover {
        background: #ec5c5c;
    }
`;


export default DivGeneral;
