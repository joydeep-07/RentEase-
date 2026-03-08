import React, { useState } from "react";
import Heading from "../components/Heading";
import { TextField, Avatar, IconButton, Box, Button } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { User } from "lucide-react";

const inputStyles = {
  "& .MuiInputLabel-root": {
    color: "var(--text-secondary)",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "var(--accent-secondary)",
  },

  "& .MuiOutlinedInput-root": {
    color: "var(--text-main)",

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
};

const Profile = () => {
  const [image, setImage] = useState(null);

 const handleImageChange = (e) => {
   setImage(e.target.files[0]);
 };

  return (
    <div className="max-w-7xl mx-auto py-10 ">
      <Heading
        small="Your profile"
        heading={
          <h1 className="text-3xl md:text-4xl font-heading text-[var(--text-main)]">
            Personalize your
            <span className="text-[var(--accent-secondary)]"> Profile</span>
          </h1>
        }
      />

      <div className="flex gap-12 mt-10 items-start ">
        {/* FORM */}
        <Box className="border border-[var(--border-light)]/30 flex-1 p-4 rounded-sm bg-[var(--bg-secondary)]/50 ">
          <div className="flex flex-col gap-5">
            {/* Row 1 */}
            <div className="flex gap-5">
              <TextField label="First Name" fullWidth sx={inputStyles} />
              <TextField label="Last Name" fullWidth sx={inputStyles} />
            </div>

            {/* Row 2 */}
            <div className="flex gap-5">
              <TextField
                label="Email"
                type="email"
                fullWidth
                sx={inputStyles}
              />
              <TextField
                label="Phone Number"
                type="tel"
                fullWidth
                sx={inputStyles}
              />
            </div>

            {/* Row 3 */}
            <div className="flex gap-5">
              <TextField
                label="House / Flat Name or Number"
                fullWidth
                sx={inputStyles}
              />
              <TextField label="Street Name" fullWidth sx={inputStyles} />
            </div>

            {/* Row 4 */}
            <div className="flex gap-5">
              <TextField label="City / Town" fullWidth sx={inputStyles} />
              <TextField label="District" fullWidth sx={inputStyles} />
              <TextField
                label="Pincode"
                type="number"
                fullWidth
                sx={{
                  ...inputStyles,

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
                }}
              />
            </div>

            {/* Row 5 */}
            <div className="flex gap-5">
              <TextField label="State" fullWidth sx={inputStyles} />
              <TextField
                label="Country"
                defaultValue="India"
                fullWidth
                sx={inputStyles}
              />
            </div>

            <div className="mt-4 flex justify-end">
              <button className=" border border-[var(--border-light)] text-[var(--text-secondary)] hover:text-[var(--accent-secondary)] rounded-sm bg-[var(--bg-secondary)] py-2 px-5">Save Changes</button>
            </div>
          </div>
        </Box>

        {/* IMAGE RIGHT */}
        <div className="flex flex-col items-center gap-3">
          <Avatar
            className="border-2 border-[var(--border-light)]/50 "
            src={image ? URL.createObjectURL(image) : ""}
            sx={{
              width: 140,
              height: 140,

              background: "var(--bg-secondary)",
              color: "var(--text-secondary)",
            }}
          >
            {!image && (
              <User className="text-[var(--text-muted)]/50 " size={80} />
            )}
          </Avatar>

          <label htmlFor="profile-upload">
            <input
              hidden
              id="profile-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />

            <IconButton
              component="span"
              sx={{
                background: "var(--accent-secondary)",
                color: "#fff",
                "&:hover": {
                  background: "var(--accent-primary)",
                },
              }}
            >
              <PhotoCamera />
            </IconButton>
          </label>

          <p className="text-sm text-[var(--text-secondary)] text-center">
            Upload Profile Image
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
