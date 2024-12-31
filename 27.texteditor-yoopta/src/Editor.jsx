import { useMemo, useState } from "react";
import YooptaEditor, { createYooptaEditor } from "@yoopta/editor";
import LinkTool, { DefaultLinkToolRender } from '@yoopta/link-tool';
import ActionMenu, { DefaultActionMenuRender } from '@yoopta/action-menu-list';
import Toolbar, { DefaultToolbarRender } from '@yoopta/toolbar';
import { Bold, Italic, CodeMark, Underline, Strike, Highlight } from '@yoopta/marks';
import { NumberedList, BulletedList, TodoList } from '@yoopta/lists';
import { HeadingOne, HeadingThree, HeadingTwo } from '@yoopta/headings';
import Accordion from "@yoopta/accordion";
import Paragraph from "@yoopta/paragraph";
import Link from "@yoopta/link";
import Blockquote from "@yoopta/blockquote";
import Callout from "@yoopta/callout";
import Code from "@yoopta/code";
import Divider from "@yoopta/divider";
import Embed from "@yoopta/embed";
import Table from "@yoopta/table";

// Plugins
const plugins = [
  // Texto básico
  Paragraph.extend({ options: { display: { 
    title: 'Párrafo', 
    description: 'Comience a escribir texto simple.' 
  }}}),
  
  // Encabezados
  HeadingOne,
  HeadingTwo, 
  HeadingThree,
  
  // Listas
  NumberedList,
  BulletedList,
  TodoList,
  
  // Elementos de formato
  Blockquote,
  Callout,
  Code,
  Link,
  
  // Elementos estructurales
  Accordion,
  Divider,
  Table,
  
  // Contenido embebido
  Embed,
];

// Marks
const MARKS = [Bold, Italic, CodeMark, Underline, Strike, Highlight];

// Tools
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