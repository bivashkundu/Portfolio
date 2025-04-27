import assest from "@/json/assest";
import { MyCardPaper } from "@/styles/StyledComponents/MyCardStyled";
import { Avatar } from "@mui/material";
import Image from "next/image";

const MyCard = () => {
  return (
    <MyCardPaper>
      <figure>
        <Image src={assest.mycardBg} alt="mycardBg" width={512} height={484} />
      </figure>
      <Avatar
        src={assest.bivash}
        alt="Bivash Kundu"
        sx={{ width: "7.292vw", height: "7.292vw" }}
      />
    </MyCardPaper>
  );
};

export default MyCard;
