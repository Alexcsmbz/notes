import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';
import { root } from './button.css';
import cx from 'classnames';

type Props = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = memo(({ children, className, ...props }) => (
  <button className={cx(root, className)} {...props}>
    {children}
  </button>
));
