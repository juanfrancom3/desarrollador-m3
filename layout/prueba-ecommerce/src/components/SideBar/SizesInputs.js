import { useState } from "react";
import { CartState } from "../../context/Context";

const SizesInputs = () => {
	const { sizesDispatch } = CartState();

	const [focus, setFocus] = useState(false)

	return (
		<>
			<input
				type="text"
				value="P"
				spellCheck="false"
				readOnly="readOnly"
				onClick={(e) =>{
					setFocus(!focus)
					sizesDispatch({ type: "FILTER_BY_SIZES", payload: e.target.value })
				}
				}
			 className={focus ? "activeInput" : ""}/>
			<input
				type="text"
				readOnly="readOnly"
				spellCheck="false"
				value="M"
				onClick={(e) => {
					setFocus(!focus);
					sizesDispatch({ type: "FILTER_BY_SIZES", payload: e.target.value })
				}
				}
				className={focus ? "active" : ""}
			/>
			<input
				type="text"
				value="G"
				readOnly="readOnly"
				spellCheck="false"
				onClick={(e) =>
					sizesDispatch({ type: "FILTER_BY_SIZES", payload: e.target.value })
				}
			/>
			<input
				type="text"
				value="GG"
				readOnly="readOnly"
				spellCheck="false"
				onClick={(e) =>
					sizesDispatch({ type: "FILTER_BY_SIZES", payload: e.target.value })
				}
			/>
			<input
				type="text"
				value="U"
				readOnly="readOnly"
				spellCheck="false"
				onClick={(e) =>
					sizesDispatch({ type: "FILTER_BY_SIZES", payload: e.target.value })
				}
			/>
			<input
				type="text"
				value="36"
				readOnly="readOnly"
				spellCheck="false"
				onClick={(e) =>
					sizesDispatch({ type: "FILTER_BY_SIZES", payload: e.target.value })
				}
			/>
			<input
				type="text"
				value="38"
				readOnly="readOnly"
				spellCheck="false"
				onClick={(e) =>
					sizesDispatch({ type: "FILTER_BY_SIZES", payload: e.target.value })
				}
			/>
			<input
				type="text"
				value="40"
				readOnly="readOnly"
				spellCheck="false"
				onClick={(e) =>
					sizesDispatch({ type: "FILTER_BY_SIZES", payload: e.target.value })
				}
			/>
			<input
				type="text"
				value="42"
				readOnly="readOnly"
				spellCheck="false"
				onClick={(e) =>
					sizesDispatch({ type: "FILTER_BY_SIZES", payload: e.target.value })
				}
			/>
			<input
				type="text"
				value="44"
				readOnly="readOnly"
				spellCheck="false"
				onClick={(e) =>
					sizesDispatch({ type: "FILTER_BY_SIZES", payload: e.target.value })
				}
			/>
			<input
				type="text"
				value="46"
				readOnly="readOnly"
				spellCheck="false"
				onClick={(e) =>
					sizesDispatch({ type: "FILTER_BY_SIZES", payload: e.target.value })
				}
			/>
		</>
	);
};

export default SizesInputs;
