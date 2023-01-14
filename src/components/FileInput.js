import { useEffect, useRef, useState } from "react";
import "./FileInput.css";

function FileInput({ initialPreview, name, value, onChange }) {
  const [preview, setPreview] = useState(initialPreview);
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview(initialPreview);
      URL.revokeObjectURL(nextPreview);
    };
  }, [value, initialPreview]);

  return (
    <div>
      <img className="FileInput-preview" src={preview} alt="이미지 미리보기" />
      <input type="file" onChange={handleChange} ref={inputRef} />
      {value && (
        <button type="button" onClick={handleClearClick}>
          X
        </button>
      )}
    </div>
  );
}

export default FileInput;
