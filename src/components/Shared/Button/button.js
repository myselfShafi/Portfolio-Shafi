import React from "react";
import "./button.style.css";

export const Button = ({
  children,
  className,
  icon,
  downloadLink,
  ...others
}) => {
  return (
    <div>
      {downloadLink ? (
        <a href={downloadLink} download>
          <button type="button" className={`btn-cv ${className}`} {...others}>
            {children} {icon && icon}
          </button>
        </a>
      ) : (
        <button type="button" className={`btn-cv ${className}`} {...others}>
          {children} {icon && icon}
        </button>
      )}
    </div>
  );
};
