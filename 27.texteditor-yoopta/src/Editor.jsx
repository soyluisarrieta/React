import { useMemo, useState } from "react";
import YooptaEditor, { createYooptaEditor } from "@yoopta/editor";
import Paragraph from "@yoopta/paragraph";

const plugins = [Paragraph];

export default function Editor() {
  const editor = useMemo(() => createYooptaEditor(), [])
  const [value, setValue] = useState()

  const onChange = (value, options) => {
    setValue(value);
    console.log({value, options});
  }

  return (
    <YooptaEditor
      editor={editor}
      plugins={plugins}
      placeholder="Escribe aquí..."
      value={value}
      onChange={onChange}
    />
  );
};