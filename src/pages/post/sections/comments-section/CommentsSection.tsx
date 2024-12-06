import { Avatar, Box, Button, TextField } from "@mui/material";
import { t } from "i18next";

const CommentsSection = () => {
  //   const navigate = useNavigate();
  //   const { user } = useAuth();
  //   const { avatar } = user || {};

  //   const [createPostState, setCreatePostState] = useState<CreatePostRequest>({
  //     text_content: "",
  //     image_content: null,
  //   });

  //   const handleTextContentChange = (text_content: string) => {
  //     setCreatePostState((prev) => ({ ...prev, text_content }));
  //   };

  //   const handleCreatePost = () => {
  //     createPostMutate(createPostState, {
  //       onSuccess: () => {
  //         navigate("/profile");
  //       },
  //     });
  //   };

  return (
    <>
      <Box className="relative bg-secondary-900 p-2 rounded-lg grid grid-cols-12">
        <Box className="lg:col-span-10 col-span-12">
          <Box className="flex">
            <Box className="p-2">
              <Avatar
                className="!size-10 !text-primary-600 !bg-secondary-600"
                // src={avatar}
              />
            </Box>
            <Box className="w-full">
              <TextField
                className="!w-full !border-0"
                placeholder={t("What is happening ?")}
                // value={createPostState.text_content}
                // onChange={(e) => handleTextContentChange(e.target.value)}
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
        </Box>

        <Box className="lg:col-span-2 col-span-12 p-2">
          <Button
            fullWidth
            variant="contained"
            className="!rounded-3xl min-w-28"
            // onClick={handleCreatePost}
            // disabled={
            // //   !createPostState.text_content.length || createPostIsPending
            // }
          >
            {t("send")}
          </Button>
        </Box>

        {/* {createPostIsPending && (
          <Box className="absolute top-0 left-0 w-full h-full backdrop-blur-sm flex justify-center items-center">
            <CircularProgress
              variant="determinate"
              value={createPostProgress}
            />
          </Box>
        )} */}
      </Box>

      <Box
        component={"hr"}
        className="mx-4 border-white/25 mt-4 md:block hidden"
      />
    </>
  );
};

export default CommentsSection;
