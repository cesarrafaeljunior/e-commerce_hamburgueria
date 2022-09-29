import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


:root{

    --white: #ffffff;
    --black: #000000;

    --colorPrimary  : #27AE60;
    --colorPrimary50: #93D7AF;
    --colorSecundary: #EB5757;

    --gray100: #333333;
    --gray50 : #828282;
    --gray20 : #E0E0E0;
    --gray0  : #F5F5F5;

    --feedBackNegative   : #E60000;
    --feedBackWarning    : #FFCD07;
    --feedBackSeucess    : #168821;
    --feedBackInformation: #155BCB;

    --fontSize26: 26px;
    --fontSize22: 22px;
    --fontSize18: 18px;
    --fontSize16: 16px;
    --fontSize14: 14px;
    --fontSize12: 12px;

    --fontWeiBold: 700;
    --fontWeiSemiBold: 600;
    --fontWeiRegular: 400;


}
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    ul,ol{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    button{
        border: none;
        cursor: pointer;
    }

`;
