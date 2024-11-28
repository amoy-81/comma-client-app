import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  TextField,
} from "@mui/material";
import { t } from "i18next";
import useAuth from "../../../../hooks/use-auth.hook";
import { useCreatePost } from "../../../../api/post/post.querys";
import { useState } from "react";
import { CreatePostRequest } from "../../../../api/post/post.type";
import { Clear, PermMedia } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { avatar } = user || {};

  const [createPostState, setCreatePostState] = useState<CreatePostRequest>({
    text_content: "",
    image_content: null,
  });

  const { createPostMutate, createPostIsPending, createPostProgress } =
    useCreatePost();

  const handleTextContentChange = (text_content: string) => {
    setCreatePostState((prev) => ({ ...prev, text_content }));
  };

  const handleCreatePost = () => {
    createPostMutate(createPostState, {
      onSuccess: () => {
        navigate("/profile");
      },
    });
  };

  return (
    <>
      <Box className="relative bg-secondary-900 p-2 rounded-lg grid grid-cols-12">
        <Box className="lg:col-span-10 col-span-12">
          <Box className="flex">
            <Box className="p-2">
              <Avatar
                className="!size-10 !text-primary-600 !bg-secondary-600"
                src={avatar}
              />
            </Box>
            <Box className="w-full">
              <TextField
                className="!w-full !border-0"
                placeholder={t("What is happening ?")}
                value={createPostState.text_content}
                onChange={(e) => handleTextContentChange(e.target.value)}
                multiline
                rows={2}
                maxRows={4}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    border: "none",
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                  },
                }}
              />
            </Box>
          </Box>

          <label htmlFor="imageFile" className="px-4 cursor-pointer">
            <PermMedia className="text-primary-600 active:!scale-90 transition " />
          </label>

          {!!createPostState.image_content && (
            <Box className="relative w-fit flex justify-center px-4 py-2">
              <img
                src={URL.createObjectURL(createPostState.image_content)}
                alt="Preview"
                className="max-w-full max-h-60 h-full rounded-lg"
              />

              <Box
                className="p-1 flex items-center bg-secondary-900 rounded-full absolute right-6 top-4 cursor-pointer transition active:scale-90"
                onClick={() =>
                  setCreatePostState((prev) => ({
                    ...prev,
                    image_content: null,
                  }))
                }
              >
                <Clear className="!size-4 transition active:scale-90" />
              </Box>
            </Box>
          )}
        </Box>

        <input
          type="file"
          id="imageFile"
          className="hidden"
          accept="image/png, image/jpeg"
          onChange={(e) =>
            setCreatePostState((prev) => ({
              ...prev,
              image_content: e.target?.files?.[0],
            }))
          }
        />

        <Box className="lg:col-span-2 col-span-12 p-2">
          <Button
            fullWidth
            variant="contained"
            className="!rounded-3xl min-w-28"
            onClick={handleCreatePost}
            disabled={
              !createPostState.text_content.length || createPostIsPending
            }
          >
            {createPostIsPending ? t("send") : t("post")}
          </Button>
        </Box>

        {createPostIsPending && (
          <Box className="absolute top-0 left-0 w-full h-full backdrop-blur-sm flex justify-center items-center">
            <CircularProgress
              variant="determinate"
              value={createPostProgress}
            />
          </Box>
        )}
      </Box>

      <Box
        component={"hr"}
        className="mx-4 border-white/25 mt-4 md:block hidden"
      />
    </>
  );
};

export default CreatePost;
