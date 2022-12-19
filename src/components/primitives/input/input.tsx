import { FC, InputHTMLAttributes, memo } from 'react';
import cx from 'classnames';
import { root } from './input.css';

export type Props = InputHTMLAttributes<HTMLInputElement> & { label?: string };

export const Input: FC<Props> = memo(
  ({ type = 'text', className, label, ...props }) => (
    <>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input className={cx(root, className)} type={type} {...props} />
    </>
  )
);
