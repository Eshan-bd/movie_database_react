import { useState } from "react";

interface Props {
  onclickButton: () => void;
}

const Button = ({ onclickButton }: Props) => {
  const [dark, setDark] = useState(false);

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={onclickButton}>
        More!
      </button>
      ``
      <button
        type="button"
        className={dark ? "btn btn-dark" : "btn btn-light"}
        onClick={() => setDark}
      >
        More!
      </button>
    </>
  );
};

export default Button;
