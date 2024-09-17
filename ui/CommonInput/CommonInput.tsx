/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
import { primaryColors } from "@/themes/_muiPalette";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField, { StandardTextFieldProps } from "@mui/material/TextField";
import React, { forwardRef } from "react";

const InputWrap = styled(TextField as any)`
  .MuiInputBase-root {
    background-color: ${primaryColors.color232221};
    border: 1px solid ${primaryColors.color373737};
    padding: 12px 0;
    border-radius: 15px;

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
    input[type="color"] {
      color: ${primaryColors?.white};
      border: 0;

      &::placeholder {
        color: ${primaryColors.mainFontColor} !important;
        opacity: 1;
        -webkit-text-fill-color: ${primaryColors.mainFontColor} !important;
      }

      &::-ms-input-placeholder {
        color: ${primaryColors.mainFontColor} !important;
        opacity: 1;
        -webkit-text-fill-color: ${primaryColors.mainFontColor} !important;
      }

      &:focus {
        border: 0;
        background: transparent;
      }
    }

    textarea {
      border: none;
    }

    &.Mui-error {
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
        border-color: ${primaryColors?.errorMain};
      }
    }
    .MuiOutlinedInput-notchedOutline {
      display: none;
    }

    #outlined-adornment-password {
      border: 0;
      padding: 0;
      height: 39px;
      font-size: 16px;

      &::placeholder {
        color: ${primaryColors?.mainFontColor};
        opacity: 1;
      }
    }
  }
`;

type InputFieldCommonProps = StandardTextFieldProps & {
  isPassword?: boolean;
  adorMentIcon?: JSX.Element;
  isAdronment?: boolean;
};

const InputFieldCommon = forwardRef<HTMLInputElement, InputFieldCommonProps>(
  ({ isPassword = false, adorMentIcon, isAdronment, ...others }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
    };
    return (
      <InputWrap
        fullWidth
        variant="outlined"
        type={isPassword ? (showPassword ? "text" : "password") : others?.type}
        InputProps={
          isAdronment
            ? {
                inputRef: ref,
                endAdornment: isPassword ? (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      disableRipple
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ) : (
                  <InputAdornment position="end">
                    <IconButton disableRipple>{adorMentIcon}</IconButton>
                  </InputAdornment>
                )
              }
            : null
        }
        {...others}
      />
    );
  }
);

export default InputFieldCommon;
