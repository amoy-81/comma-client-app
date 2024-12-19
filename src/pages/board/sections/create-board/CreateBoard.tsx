import React, { useState } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { useBoardComment } from "../../../../api/board/board.querys";
import useAuth from "../../../../hooks/use-auth.hook";

const CreateBoard: React.FC = () => {
  const { user } = useAuth();
  const { addBoardMutate, addBoardIsPending } = useBoardComment();
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) {
      alert("Text cannot be empty!");
      return;
    }

    addBoardMutate({
      text,
    });
    setText("");
  };

  return (
    <Box display="flex" alignItems="center" gap="16px" marginBottom="16px">
      <Avatar src={user?.avatar || ""} alt="user avatar" style={{ width: 48, height: 48 }} />
      
      <Box
        flex={1}
        style={{
          backgroundColor: "#161B22",
          borderRadius: "8px",
          padding: "8px 12px",
        }}
      >
        <Typography
          contentEditable={!addBoardIsPending}
          onInput={(e) => setText(e.currentTarget.textContent || "")}
          style={{
            color: "#E6EDF3",
            outline: "none",
            whiteSpace: "pre-wrap",
            cursor: addBoardIsPending ? "not-allowed" : "text",
          }}
          suppressContentEditableWarning
        >
          {text || "Enter your text"}
        </Typography>
      </Box>
      
      <Box
        onClick={handleSubmit}
        style={{
          backgroundColor: addBoardIsPending ? "#4C6788" : "#1E90FF",
          borderRadius: "44px",
          padding: "8px 24px",
          cursor: addBoardIsPending ? "not-allowed" : "pointer",
          color: "#FFF",
          fontWeight: "bold",
          opacity: addBoardIsPending ? 0.7 : 1,
        }}
      >
        SEND
      </Box>
    </Box>
  );
};

export default CreateBoard;
