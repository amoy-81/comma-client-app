import { Box } from "@mui/material";
import TextInput from "../../../../../../../components/text-input/TextInput";

const NewsSummarySection = () => {
  return (
    <Box className="flex gap-4">
      <Box>
        <TextInput label={"Title"} name="title[0]" variant="outlined" />
        <TextInput
          label={"Paragraph"}
          name="paragraph[0]"
          variant="outlined"
          multiline
          minRows={4}
        />
      </Box>
      <Box>
        <TextInput label={"Title"} name="title[1]" variant="outlined" />
        <TextInput
          label={"Paragraph"}
          name="paragraph[1]"
          variant="outlined"
          multiline
          minRows={4}
        />
      </Box>
      <Box>
        <TextInput label={"Title"} name="title[2]" variant="outlined" />
        <TextInput
          label={"Paragraph"}
          name="paragraph[2]"
          variant="outlined"
          multiline
          minRows={4}
        />
      </Box>
    </Box>
  );
};

export default NewsSummarySection;
