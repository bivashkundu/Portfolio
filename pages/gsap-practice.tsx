import MyCard from "@/components/MyCard/MyCard";
import { PageWrap } from "@/styles/StyledComponents/HomeTwoStyled";
import { ThemeModeContext } from "@/themes/MuiThemeProvider";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import {
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  Stack
} from "@mui/material";
import { useContext, useMemo, useRef, useState } from "react";

export default function GsapPractice() {
  const [activeBox, setActiveBox] = useState<"about" | "Resume">("about");
  const [exitingBox, setExitingBox] = useState<"about" | "Resume" | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { mode, toggleMode } = useContext(ThemeModeContext);

  const handleClick = (target: "about" | "Resume") => {
    if (target !== activeBox) {
      setExitingBox(activeBox);
      setActiveBox(target);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setExitingBox(null);
      }, 600);
    }
  };

  const getBoxClass = (box: "about" | "Resume") => {
    if (activeBox === box) return "box active";
    if (exitingBox === box) return "box exiting";
    return "box";
  };

  const lineCount = 11;
  const lineIds = useMemo(
    () => Array.from({ length: lineCount }, () => crypto.randomUUID()),
    []
  );

  return (
    <PageWrap>
      <Box className="lines">
        {lineIds.map((id, index) => (
          <Box
            key={id}
            className="line"
            style={
              {
                "--delay": `${index * 0.4}s`
              } as React.CSSProperties
            }
          />
        ))}
      </Box>
      <Container fixed sx={{ height: "100%" }}>
        <Stack height="100%" justifyContent="center" alignItems="center">
          <Stack direction="row" className="section-wrap" width="100%">
            <Box className="menu-leftbar">
              <Box className="top-appbar">
                <IconButton disableRipple>
                  <WidgetsOutlinedIcon />
                </IconButton>
                <IconButton onClick={toggleMode} disableRipple>
                  {mode === "light" ? (
                    <DarkModeOutlinedIcon />
                  ) : (
                    <LightModeOutlinedIcon />
                  )}
                </IconButton>
              </Box>
              <List disablePadding>
                <ListItem disablePadding>
                  <Button onClick={() => handleClick("about")}>
                    <i>
                      <Person3OutlinedIcon />
                    </i>
                    About
                  </Button>
                </ListItem>
                <ListItem disablePadding>
                  <Button onClick={() => handleClick("Resume")}>
                    <i>
                      <ListAltOutlinedIcon />
                    </i>
                    Resume
                  </Button>
                </ListItem>
              </List>
            </Box>
            <Stack direction="row" className="right-wrapper">
              <MyCard />
              <Box className="right-box-main">
                <Box
                  className={getBoxClass("about")}
                  sx={{ background: "red", width: "calc(100% - 100px)" }}
                />
                <Box
                  className={getBoxClass("Resume")}
                  sx={{ background: "bisque", width: "calc(100% - 100px)" }}
                />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </PageWrap>
  );
}
