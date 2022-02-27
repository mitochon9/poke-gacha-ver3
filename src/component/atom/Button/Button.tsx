import PropTypes from 'prop-types';
import { ReactNode } from 'react';

export type ButtonProps = {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: 'rounded' | 'square' | 'ellipse';
  onClick: VoidFunction;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  variant,
  onClick,
}) => (
  <button
    type='button'
    disabled={disabled}
    onClick={onClick}
    className={`button ${variant} ${className}`}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.any,
  onClick: PropTypes.func.isRequired,
};
