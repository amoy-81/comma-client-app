import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUpdateProfile } from "../../../../api/user/user.querys";
import { t } from "i18next";
import useAuth from "../../../../hooks/use-auth.hook";
import { UpdateProfileRequest } from "../../../../api/user/user.type";

const EditProfile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { updateProfileMutate, updateProfileIsPending } = useUpdateProfile();
  const [name, setName] = useState(user?.name || "");
  const [bio, setBio] = useState(user?.bio || "");
  const [avatar, setAvatar] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("userId", user?.id?.toString() || "");
    if (name) formData.append("name", name);
    if (bio) formData.append("bio", bio);
    if (avatar) formData.append("avatar", avatar);

    const payload = Object.fromEntries(
      formData.entries()
    ) as unknown as UpdateProfileRequest;

    updateProfileMutate(payload, {
      onSuccess: () => {
        navigate("/profile");
      },
    });
  };

  return (
    <Box className="min-h-screen bg-secondary-900 text-white p-4">
      <Typography variant="h4" className="!mb-4">
        {t("Edit Profile")}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box className="flex flex-col gap-4">
          <TextField
            label={t("Name")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="!bg-secondary-600"
          />
          <TextField
            label={t("Bio")}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            multiline
            rows={4}
            className="!bg-secondary-600"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setAvatar(e.target.files[0]);
              }
            }}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={updateProfileIsPending}
            className="!bg-primary-600"
          >
            {updateProfileIsPending ? t("Saving...") : t("Save Changes")}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default EditProfile;
