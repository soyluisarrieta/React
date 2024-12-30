import { useMemo, useState } from "react";
import YooptaEditor, { createYooptaEditor } from "@yoopta/editor";
import Paragraph from "@yoopta/paragraph";
import LinkTool, { DefaultLinkToolRender } from '@yoopta/link-tool';
import ActionMenu, { DefaultActionMenuRender } from '@yoopta/action-menu-list';
import Toolbar, { DefaultToolbarRender } from '@yoopta/toolbar';
import { Bold, Italic, CodeMark, Underline, Strike, Highlight } from '@yoopta/marks';

const plugins = [Paragraph]

const MARKS = [Bold, Italic, CodeMark, Underline, Strike, Highlight];
const TOOLS = {
  Toolbar: {
    tool: Toolbar,
    render: DefaultToolbarRender,
  },
  ActionMenu: {
    tool: ActionMenu,
    render: DefaultActionMenuRender,
  },
  LinkTool: {
    tool: LinkTool,
    render: DefaultLinkToolRender,
  },
};


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
      marks={MARKS}
      tools={TOOLS}
    />
  );
};