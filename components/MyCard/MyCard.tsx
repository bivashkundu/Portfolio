import assest from "@/json/assest";
import { MyCardPaper } from "@/styles/StyledComponents/MyCardStyled";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const MyCard = () => {
  return (
    <MyCardPaper>
      <Paper elevation={0} className="mycard-paper">
        <figure>
          <Image
            src={assest.mycardBg}
            alt="mycardBg"
            width={512}
            height={484}
          />
        </figure>
        <Box className="myavt">
          <Avatar
            src={assest.bivash}
            alt="Bivash Kundu"
            sx={{ width: "7.292vw", height: "7.292vw" }}
          />
        </Box>
        <Box className="my-info" sx={{ textAlign: "center" }}>
          <Typography variant="h1">Bivash Kundu</Typography>
          <Typewriter
            options={{
              strings: ["HTML Developer", "Professional Coder"],
              autoStart: true,
              loop: true
            }}
          />
        </Box>
      </Paper>
    </MyCardPaper>
  );
};

export default MyCard;
