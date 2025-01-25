import TextInput from "../../../../../../../components/text-input/TextInput";

const FullArticleSection = () => {
  return (
    <>
      <TextInput label={"Title"} name="title[0]" variant="outlined" />
      <TextInput
        label={"Paragraph"}
        name="paragraph[0]"
        variant="outlined"
        multiline
        minRows={4}
      />
    </>
  );
};

export default FullArticleSection;
