import styled from 'styled-components'

interface Props {
    Fsize?: any;
}

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 70px 0;

    @media(max-width: 800px){
        padding: 0px 0px;
        margin: 80px 0;
    }

`;