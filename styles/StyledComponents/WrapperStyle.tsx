import { styled } from "@mui/material";
import Box from "@mui/material/Box";

export const WrapperStyle = styled(Box)`
  position: relative;

  .main_body {
    min-height: calc(100vh - 96px);
  }

  strong,
  b {
    font-weight: 700;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }

  a:hover {
    color: #41b362;
  }

  a:focus {
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0;
    color: var(--white);
  }

  p:last-child {
    margin-bottom: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  ul li {
    padding: 0;
    position: relative;
    list-style: none;
  }

  button {
    .MuiTouchRipple-root {
      display: none;
    }
  }

  a,
  button {
    transition: 0.3s all ease-in-out 0s;
    -webkit-transition: 0.3s all ease-in-out 0s;
    -moz-transition: 0.3s all ease-in-out 0s;
  }

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="password"],
  input[type="search"],
  input[type="number"],
  input[type="tel"],
  input[type="range"],
  input[type="date"],
  input[type="month"],
  input[type="week"],
  input[type="time"],
  input[type="datetime"],
  input[type="datetime-local"],
  input[type="color"],
  textarea {
    padding: 5px 10px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: 1px solid #656664;
    border-radius: 0;
  }

  select {
    background: url(/assets/images/down-arrow.svg) right 10px center no-repeat;
    background-size: 20px;
  }

  select[multiple] {
    background: transparent;
  }

  input[type="button"],
  input[type="submit"] {
    text-align: center;
    padding: 8px 20px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    color: #fff;
    background: #51bff0;
    border: 1px solid #51bff0;
    transition: 0.3s all ease-in-out 0s;
    -webkit-transition: 0.3s all ease-in-out 0s;
    -moz-transition: 0.3s all ease-in-out 0s;
    cursor: pointer;
    display: inline-block;
    border-radius: 0;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }

  button:hover,
  input[type="button"]:hover,
  input[type="submit"]:hover {
    outline: none;
    text-decoration: none;
  }

  // ==============================
  .MuiContainer-root {
    position: relative;
    z-index: 11;

    &.cus_container {
      @media (min-width: 1400px) {
        max-width: 1470px;
      }
    }
  }
  //   ======================

  .cmn-sec-class {
    background-size: cover;
    z-index: 1;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 100px 0;
    min-height: 100vh;
  }

  .text-primary {
    color: #41b362;
  }
  .text-secondary {
    color: #ffe600;
  }
`;
