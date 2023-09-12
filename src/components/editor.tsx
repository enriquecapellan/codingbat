import { FC } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const Editor: FC<any> = ({ value, onChange }) => {
	return (
		<CodeMirror
    theme="dark"
			height="500px"
			style={{ borderRadius: "4px", overflow: "hidden" }}
			value={value}
			onChange={onChange}
			extensions={[javascript()]}
		/>
	);
};

export default Editor;
