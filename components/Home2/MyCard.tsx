import assest from "@/json/assest";
import { sociallinks } from "@/json/mock/common.mock";
import { MyCardPaper } from "@/styles/StyledComponents/Home2Styled/MyCardStyled";
import { CustomSize } from "@/ui/CustomViewSize";
import DownloadingIcon from "@mui/icons-material/Downloading";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import {
  Avatar,
  Box,
  List,
  ListItem,
  Paper,
  Stack,
  Typography
} from "@mui/material";
// import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const MyCard = () => {
  return (
    <MyCardPaper>
      <Paper elevation={0} className="mycard-paper">
        <figure>
          {/* <Image
            // src={assest.mycardBg}
            src="https://ryancv.bslthemes.com/system/wp-content/uploads/sites/5/2022/07/pexels-mikhail-nilov-6963744.mp4"
            alt="mycardBg"
            width={512}
            height={484}
          /> */}
          <video
            width={512}
            height={484}
            controls={false}
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://ryancv.bslthemes.com/system/wp-content/uploads/sites/5/2022/07/pexels-mikhail-nilov-6963744.mp4"
              type="video/mp4"
            />
          </video>
        </figure>
        <Box className="myavt">
          <Avatar
            src={assest.bivash}
            alt="Bivash Kundu"
            sx={{ width: CustomSize(140), height: CustomSize(140) }}
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
          <List className="social-links" disablePadding>
            {sociallinks.map((data, index) => (
              <ListItem disablePadding key={index}>
                <Link rel="noreferrer" aria-label="testlabel" href={data.href}>
                  {data.icon}
                </Link>
              </ListItem>
            ))}
          </List>
          <Stack
            direction="row"
            alignItems="center"
            flexWrap="wrap"
            className="car-btm-sec"
          >
            <Link href="/">
              Download CV
              <i>
                <DownloadingIcon />
              </i>
            </Link>
            <Link href="/">
              Contact Me
              <i>
                <SendOutlinedIcon />
              </i>
            </Link>
          </Stack>
        </Box>
      </Paper>
    </MyCardPaper>
  );
};

export default MyCard;
