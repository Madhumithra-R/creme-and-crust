import React from 'react';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  icon: Icon,
  fullWidth = false,
  ariaLabel,
  ...rest
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bakery-accent rounded-full active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 select-none';

  const variants = {
    primary: 'bg-bakery-accent text-white hover:bg-bakery-accentDark shadow-sm hover:shadow-warm text-shadow-sm',
    secondary: 'bg-bakery-secondary text-bakery-primary hover:bg-bakery-secondaryLight shadow-sm',
    dark: 'bg-bakery-primary text-bakery-bg hover:bg-black shadow-sm',
    outline: 'border border-bakery-accent text-bakery-accent hover:bg-bakery-accent hover:text-white',
    outlineMuted: 'border border-bakery-border text-bakery-primary hover:border-bakery-accent hover:text-bakery-accent bg-transparent',
    ghost: 'text-bakery-primary hover:text-bakery-accent hover:bg-bakery-accent/10',
    danger: 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200',
  };

  const sizes = {
    xs: 'px-2.5 py-1 text-xs gap-1',
    sm: 'px-4 py-1.5 text-xs font-semibold tracking-wide gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3 text-base font-semibold gap-2.5',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${widthStyle} ${className}`}
      {...rest}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
