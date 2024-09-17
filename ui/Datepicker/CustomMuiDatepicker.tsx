import { primaryColors } from "@/themes/_muiPalette";
import { IconButton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DEFAULT_DESKTOP_MODE_MEDIA_QUERY } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import CalendersmIcon from "../Icons/CalendersmIcon";
import DownIcon from "../Icons/DownIcon";

interface iconPositon {
  isPositonStart?: boolean;
  isCalenderIcon?: boolean;
}

const styledDatepicker = {
  [`&.MuiFormControl-root`]: {
    width: "100%"
  },

  [`.MuiInputBase-root`]: {
    background: `${primaryColors.secondary}`,
    paddingRight: "13px",

    [`.MuiInputBase-input`]: {
      border: "none",
      fontSize: "14px",
      fontWeight: "400",
      color: `${primaryColors.primary_600}`,
      padding: "17px 10px 17px 20px"
    },
    [`svg`]: {
      width: "20px"
    },
    [`.MuiOutlinedInput-notchedOutline`]: {
      border: "none"
    }
  }
};
const styledDatepicker2 = {
  [`&.MuiFormControl-root`]: {
    width: "100%"
  },

  [`.MuiInputBase-root`]: {
    [`@media (max-width: 599px)`]: {
      paddingLeft: "0"
    },
    [`.MuiInputAdornment-positionStart`]: {
      margin: "0",
      [`button`]: {
        padding: "0",
        [`.MuiTouchRipple-root`]: {
          display: " none"
        },
        [`&:hover`]: {
          background: "transparent"
        }
      }
    },

    [`svg`]: {
      width: "20px"
    },

    [`.MuiInputBase-input`]: {
      border: "none",
      fontSize: "14px",
      fontWeight: "400",
      color: `${primaryColors.primary}`
    },
    [`.MuiOutlinedInput-notchedOutline`]: {
      border: "none"
    }
  }
};

const CustomMuiDatepicker = ({
  isPositonStart,
  isCalenderIcon
}: iconPositon) => {
  const currentDate = new Date();
  const isDesktop = useMediaQuery(DEFAULT_DESKTOP_MODE_MEDIA_QUERY, {
    defaultMatches: true
  });

  const [inputRef, setInputRef] = useState<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleCustomClick = (e: MouseEvent) => {
      const excludedClicks = ["svg", "button", "path"];
      if (
        excludedClicks.includes(
          (e.target as HTMLElement).tagName.toLowerCase()
        ) ||
        !isDesktop
      ) {
        return;
      }
      inputRef?.blur();
      inputRef?.parentElement
        ?.getElementsByClassName("MuiInputAdornment-root")?.[0]
        ?.getElementsByTagName("button")?.[0]
        ?.click();
    };
    inputRef?.parentElement?.addEventListener("click", handleCustomClick);
    return () => {
      inputRef?.parentElement?.removeEventListener("click", handleCustomClick);
    };
  }, [inputRef, isDesktop]);

  const IconComp = (
    <IconButton>
      {isCalenderIcon ? <CalendersmIcon /> : <DownIcon />}
    </IconButton>
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        slots={{ openPickerIcon: isCalenderIcon ? CalendersmIcon : DownIcon }}
        defaultValue={dayjs(currentDate)}
        format="DD MMM YYYY"
        sx={isPositonStart ? styledDatepicker2 : styledDatepicker}
        slotProps={{
          inputAdornment: {
            position: isPositonStart ? "start" : "end"
          },
          textField: {
            InputProps: !isDesktop
              ? {
                  startAdornment: isPositonStart ? IconComp : undefined,
                  endAdornment: isPositonStart ? undefined : IconComp
                }
              : undefined
          }
        }}
        inputRef={setInputRef}
      />
    </LocalizationProvider>
  );
};

export default CustomMuiDatepicker;
