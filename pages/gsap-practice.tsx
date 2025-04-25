import { PageWrap } from "@/styles/StyledComponents/HomeTwoStyled";
import { Box, Button, Container, List, ListItem, Stack } from "@mui/material";
import { useMemo, useRef, useState } from "react";

export default function GsapPractice() {
  const [activeBox, setActiveBox] = useState<"home" | "about">("home");
  const [exitingBox, setExitingBox] = useState<"home" | "about" | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = (target: "home" | "about") => {
    if (target !== activeBox) {
      setExitingBox(activeBox);
      setActiveBox(target);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setExitingBox(null);
      }, 600);
    }
  };

  const getBoxClass = (box: "home" | "about") => {
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
      <Container fixed maxWidth="xl" sx={{ height: "100%" }}>
        <Stack height="100%" justifyContent="center" alignItems="center">
          <Stack direction="row" className="section-wrap" width="100%">
            <List
              sx={{ width: "100px", bgcolor: "#1d252c", zIndex: "11" }}
              className="menu-leftbar"
            >
              <ListItem>
                <Button onClick={() => handleClick("home")}>Home</Button>
              </ListItem>
              <ListItem>
                <Button onClick={() => handleClick("about")}>About</Button>
              </ListItem>
            </List>
            <Box
              className={getBoxClass("home")}
              sx={{ background: "red", width: "calc(100% - 100px)" }}
            />
            <Box
              className={getBoxClass("about")}
              sx={{ background: "bisque", width: "calc(100% - 100px)" }}
            />
          </Stack>
        </Stack>
      </Container>
    </PageWrap>
  );
}
