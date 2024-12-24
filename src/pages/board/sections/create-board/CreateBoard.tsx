import React, { useState } from "react";
import { Avatar, Box, Button } from "@mui/material";
import useAuth from "../../../../hooks/use-auth.hook";
import { useBoardComment } from "../../../../api/board/board.querys";

const CreateBoard: React.FC = () => {
  const { user } = useAuth();
  const { addBoardMutate, addBoardIsPending } = useBoardComment();
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    if (!text.trim()) {
      alert("Text cannot be empty!");
      return;
    }

    await addBoardMutate(
      { text },
      {
        onSuccess: () => {
          setText("");
        },
      }
    );
  };

  return (
    <Box display="flex" alignItems="center" gap="16px" marginBottom="16px">
      <Avatar src={user?.avatar || ""} alt="user avatar" style={{ width: 48, height: 48 }} />

      <Box
        component="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text"
        disabled={addBoardIsPending}
        style={{
          flex: 1,
          backgroundColor: "#090F19",
          border: "none",
          color: "#E6EDF3",
          borderRadius: "24px",
          padding: "12px 16px",
          outline: "none",
        }}
      />

      <Button
        onClick={handleSubmit}
        disabled={addBoardIsPending}
        style={{
          backgroundColor: addBoardIsPending ? "#4C6788" : "#1E90FF",
          borderRadius: "44px",
          padding: "8px 24px",
          color: "#FFF",
          fontWeight: "bold",
          opacity: addBoardIsPending ? 0.7 : 1,
        }}
      >
        {addBoardIsPending ? "WAIT" : "SEND"}
      </Button>
    </Box>
  );
};

export default CreateBoard;
