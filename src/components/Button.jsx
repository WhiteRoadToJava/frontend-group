import "../styles/button.css"

const Button = ({ onClick, text, disabled = false, type, variant }) => {
    const buttonClass = `btn ${variant}`;
  
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={buttonClass}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  