import React, { forwardRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const DraftEditor = forwardRef(function DraftEditor(
  { href, labelText, ...other },
  ref
) {
  const handleEditorChange = (e) => {
    console.log("Content was updated:", e.target.getContent());
  };

  return (
    <>
      <Editor
        apiKey="rp7nufrsj8954qar9lt08ce6d2jogze6xw3sbq658c4svbjm"
        initialValue="<p>Initial content</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount",
          ],
          toolbar: `"undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help"`,
        }}
        onChange={handleEditorChange}
      />
    </>
  );
});

DraftEditor.defaultProps = {
  href: null,
  labelText: null,
};

export default DraftEditor;
