import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Button, { ButtonProps } from "@mui/material/Button";

const CustomButtonWrapper = styled(Button)`
  display: flex;
  padding: 12px 26px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  text-transform: capitalize;

  &.Mui-disabled {
    background-color: ${primaryColors?.disabledBg};
    border: 1px solid ${primaryColors?.disabledBg};

    p {
      color: ${primaryColors?.white};
    }
    img {
      filter: contrast(0);
    }
  }

  &.smallButton {
    padding: 4px 16px;
    width: auto;
  }

  &.MuiButton-outlinedInfo {
    p {
      color: ${primaryColors?.black};
    }
  }

  p {
    font-size: 16px;
    font-weight: 500;
    color: ${primaryColors?.white};
  }

  span {
    div {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

interface CustomButtonprops extends ButtonProps {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  buttonType?: "small" | "large";
}

const CustomButtonPrimary = ({
  children,
  className,
  buttonType,
  ...others
}: CustomButtonprops) => {
  return (
    <CustomButtonWrapper
      className={`${buttonType === "small" && "smallButton"} ${
        className || ""
      }`}
      {...others}
    >
      {children}
    </CustomButtonWrapper>
  );
};

export default CustomButtonPrimary;
