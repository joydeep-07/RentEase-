import React, { useState } from "react";
import AdminNav from "./AdminNav";

import {
  Box,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Avatar,
  IconButton,
} from "@mui/material";

import { Camera, Image as ImageIcon } from "lucide-react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import dayjs from "dayjs";

const categories = [
  "Furniture",
  "Electronics",
  "Appliances",
  "Fitness",
  "Office",
  "Gaming",
];

const conditions = ["New", "Like New", "Good", "Used"];

const inputStyles = {
  "& .MuiInputLabel-root": {
    color: "var(--text-secondary)",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "var(--accent-secondary)",
  },

  "& .MuiOutlinedInput-root": {
    color: "var(--text-main)",
    background: "transparent",

    "& fieldset": {
      borderColor: "var(--border-light)",
    },

    "&:hover fieldset": {
      borderColor: "var(--accent-secondary)",
    },

    "&.Mui-focused fieldset": {
      borderColor: "var(--accent-secondary)",
    },
  },

  "& input": {
    color: "var(--text-main)",
  },

  "& textarea": {
    color: "var(--text-main)",
  },

  "& .MuiSvgIcon-root": {
    color: "var(--text-secondary)",
  },

  "& input[type=number]": {
    MozAppearance: "textfield",
  },

  "& input[type=number]::-webkit-outer-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },

  "& input[type=number]::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
};

const AddItem = () => {
  const [availableFrom, setAvailableFrom] = useState(dayjs());
  const [availableTill, setAvailableTill] = useState(null);

  const [imageFile, setImageFile] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const [preview, setPreview] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImageFile(file);
      setImageURL("");
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleURLChange = (e) => {
    const url = e.target.value;

    setImageURL(url);
    setImageFile(null);
    setPreview(url);
  };

  return (
    <div>
      <AdminNav />

      <div className="max-w-7xl mx-auto py-20">
        <div className="flex gap-12 items-start">
          {/* FORM SECTION */}

          <Box className="border border-[var(--border-light)]/30 flex-1 p-6 rounded-sm bg-[var(--bg-secondary)]/50">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl uppercase text-[var(--accent-primary)] font-semibold">
                Product Information
              </h2>

              <div className="flex gap-5">
                <TextField label="Product Name" fullWidth sx={inputStyles} />
                <TextField label="Brand" fullWidth sx={inputStyles} />
              </div>

              <div className="flex gap-5">
                <TextField select label="Category" fullWidth sx={inputStyles}>
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField select label="Condition" fullWidth sx={inputStyles}>
                  {conditions.map((c) => (
                    <MenuItem key={c} value={c}>
                      {c}
                    </MenuItem>
                  ))}
                </TextField>
              </div>

              <TextField
                label="Product Description"
                multiline
                rows={4}
                fullWidth
                sx={inputStyles}
              />
            </div>
          </Box>

          {/* IMAGE SECTION */}

          <div className="flex flex-col items-center gap-4 w-[300px]">
            <div className="relative">
              <Avatar
                variant="square"
                src={preview}
                className="border-2 border-[var(--border-light)]/50 rounded-md"
                sx={{
                  width: 250,
                  height: 250,
                  borderRadius: "5px",
                  background: "var(--bg-secondary)",
                }}
              >
                {!preview && (
                  <ImageIcon size={90} className="text-[var(--text-muted)]" />
                )}
              </Avatar>

              <label
                htmlFor="upload-image"
                className="absolute bottom-2 right-2"
              >
                <input
                  hidden
                  id="upload-image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                />

                <IconButton
                  component="span"
                  sx={{
                    background: "var(--accent-secondary)",
                    color: "#fff",
                    width: 34,
                    height: 34,
                    "&:hover": {
                      background: "var(--accent-primary)",
                    },
                  }}
                >
                  <Camera size={16} />
                </IconButton>
              </label>
            </div>

            <p className="text-sm text-[var(--text-secondary)] text-center">
              Upload Product Image
            </p>

            <TextField
              label="Or Paste Image URL"
              value={imageURL}
              onChange={handleURLChange}
              fullWidth
              sx={inputStyles}
            />
          </div>
        </div>

        {/* LOWER SECTION */}

        <div className="border border-[var(--border-light)]/30 mt-4 p-6 bg-[var(--bg-secondary)]/50 rounded-sm">
          <h2 className="text-lg text-[var(--text-main)] font-semibold pt-2">
            Pricing
          </h2>

          <div className="flex gap-5 mt-2">
            <TextField
              label="Price per Day (₹)"
              type="number"
              fullWidth
              sx={inputStyles}
            />

            <TextField
              label="Security Deposit (₹)"
              type="number"
              fullWidth
              sx={inputStyles}
            />

            <TextField
              label="Total Stock"
              type="number"
              fullWidth
              sx={inputStyles}
            />
          </div>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="flex gap-5 mt-6">
              <DatePicker
                label="Available From"
                value={availableFrom}
                onChange={(newValue) => setAvailableFrom(newValue)}
                // This sx targets the Calendar Popout specifically
                slotProps={{
                  textField: {
                    fullWidth: true,
                    sx: inputStyles, // This applies your custom styles to the input box
                  },
                  // This ensures the popup/popper elements also respect your dark mode variables
                  layout: {
                    sx: {
                      "& .MuiPickersDay-root": { color: "var(--text-main)" },
                      "& .MuiPickersCalendarHeader-label": {
                        color: "var(--text-main)",
                      },
                      "& .MuiDayCalendar-weekDayLabel": {
                        color: "var(--text-secondary)",
                      },
                      "& .MuiSvgIcon-root": {
                        color: "var(--accent-secondary)",
                      },
                      backgroundColor: "var(--bg-secondary)",
                    },
                  },
                }}
              />

              <DatePicker
                label="Available Till"
                value={availableTill}
                onChange={(newValue) => setAvailableTill(newValue)}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    sx: inputStyles,
                  },
                  layout: {
                    sx: {
                      "& .MuiPickersDay-root": { color: "var(--text-main)" },
                      "& .MuiPickersCalendarHeader-label": {
                        color: "var(--text-main)",
                      },
                      "& .MuiDayCalendar-weekDayLabel": {
                        color: "var(--text-secondary)",
                      },
                      "& .MuiSvgIcon-root": {
                        color: "var(--accent-secondary)",
                      },
                      backgroundColor: "var(--bg-secondary)",
                    },
                  },
                }}
              />
            </div>
          </LocalizationProvider>

          <div className="flex gap-10 pt-4">
            <FormControlLabel control={<Checkbox />} label="Featured Product" />

            <FormControlLabel control={<Checkbox />} label="Active Product" />
          </div>

          <div className="flex justify-end pt-6">
            <button className="border border-[var(--border-light)] text-[var(--text-secondary)] hover:text-[var(--accent-secondary)] rounded-sm bg-[var(--bg-secondary)] py-2 px-6 transition">
              Add Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
