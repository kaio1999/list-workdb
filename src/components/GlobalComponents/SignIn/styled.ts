import styled from 'styled-components'

interface Props {
    Fsize?: number;
    background?: any;
    border?: string;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 5% 0;

    label {
        font-family: Montserrat;
        font-weight: bold;
        font-size: 15px;
    }

    .datePicker{
        label {
            padding: 25px 0;
        }
    }
`;

export const ErrorModal = styled.div`
    background: #FFFF;
    height: 120px;
    box-shadow: 0 2px 2px 0 rgb(50 50 50 / 15%);
    font-family: Lato;
    display: flex;
    padding: 0px 10px;

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

export const DivInput = styled.div`
    position: relative;
    padding-top: 13px;
    margin: 12px 0;
    width: 65%;

    input,
    button {
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
    }

    input:focus {
        border-bottom: 1px solid #66afe9;
    }

    label {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 10px 0;
    }

    input ~ label {
        transition: .4s;
    }

    input:focus ~ label,
    input:valid ~ label {
        color: #66afe9;
        transform:translateY(-15px)
    }
`;

export const Input = styled.input`
    outline: 0;
    border: none;
    border-bottom: 1px solid black;
    width: 100%;
    background: none;
    font-size: 18px;
`;

export const ButtonSignUp = styled.button`
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

export const DivButton = styled.div`
    width: 65%;
`;