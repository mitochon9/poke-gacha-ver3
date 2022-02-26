import PropTypes from 'prop-types';
import { ReactNode } from 'react';

export type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  variant: 'rounded' | 'square' | 'ellipse';
  onClick: VoidFunction;
};

export const Button: React.FC<ButtonProps> = ({ children, disabled, variant, onClick }) => (
  <button type='button' disabled={disabled} onClick={onClick} className={`button ${variant}`}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};
