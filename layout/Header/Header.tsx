import { HeaderWrap } from "@/styles/StyledComponents/HeaderWrapper";
import { AppBar, Container } from "@mui/material";

const Header = () => {
  return (
    <HeaderWrap>
      <AppBar component="nav" position="static" elevation={0}>
        <Container fixed>dc</Container>
      </AppBar>
    </HeaderWrap>
  );
};

export default Header;
