import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "./CustomDatePicker.css";

const CustomDatePicker = ({
  value,
  onChange,
  label = "Select Date",
  width = 250,
  height = 50,
}) => {
  return (
    <div
      className="custom-datepicker-container"
      style={{ width, height }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          label={label}
          value={value}
          onChange={onChange}
          format="dd/MM/yyyy"
          slotProps={{
            textField: {
              variant: "outlined",
              InputProps: {
                style: {
                  borderRadius: 16,
                  background: "#F9F9FA",
                  height,
                },
              },
              InputLabelProps: {
                style: { fontSize: "0.8rem", color: "#646464" },
              },
              sx: {
                "& fieldset": { border: "none" },
                width,
              },
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default CustomDatePicker;
