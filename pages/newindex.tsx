import AboutMe from "@/components/Home2/AboutMe";
import MyCard from "@/components/Home2/MyCard";
import ParticlesBackground from "@/components/Home2/ParticlesBackground";
import { PageWrap } from "@/styles/StyledComponents/Home2Styled/HomeTwoStyled";
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
    Paper,
    Stack
} from "@mui/material";
import { useContext, useRef, useState } from "react";

const boxData = [
    {
        key: "about",
        label: "About",
        icon: <Person3OutlinedIcon />,
        content: <AboutMe />
    },
    {
        key: "resume",
        label: "Resume",
        icon: <ListAltOutlinedIcon />,
        content: "text2"
    }
] as const;

type BoxKey = (typeof boxData)[number]["key"];

export default function Newindex() {
    const [activeBox, setActiveBox] = useState<BoxKey>("about");
    const [exitingBox, setExitingBox] = useState<BoxKey | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const { mode, toggleMode } = useContext(ThemeModeContext);

    const handleClick = (target: BoxKey) => {
        if (target !== activeBox) {
            setExitingBox(activeBox);
            setActiveBox(target);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                setExitingBox(null);
            }, 800);
        }
    };

    const getBoxClass = (box: BoxKey) => {
        if (activeBox === box) return "box active";
        if (exitingBox === box) return "box exiting";
        return "box";
    };



    return (
        <PageWrap>
            <ParticlesBackground />
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
                                {boxData.map((item) => (
                                    <ListItem key={item.key} disablePadding>
                                        <Button onClick={() => handleClick(item.key)}>
                                            <i>{item.icon}</i>
                                            {item.label}
                                        </Button>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                        <Stack direction="row" className="right-wrapper">
                            <MyCard />
                            <Box className="right-box-main">
                                {boxData.map((item) => (
                                    <Paper
                                        elevation={0}
                                        key={item.key}
                                        className={`cmn-box ${getBoxClass(item.key)}`}
                                        sx={{ width: "calc(100% - 5.208vw)" }}
                                    >
                                        {item.content}
                                    </Paper>
                                ))}
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </PageWrap>
    );
}
