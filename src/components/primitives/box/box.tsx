import { CSSProperties, FC, ReactNode } from 'react';
import {
  adaptivePaddings,
  align,
  block,
  flow,
  gap,
  grid,
  justify,
  verticalPaddings,
} from './box.css';
import cx from 'classnames';
import { Space } from '../../../themes/main.css';

type Props = {
  children: ReactNode;
  className?: string;
  direction?: keyof typeof flow;
  space?: Space;
  alignItems?: keyof typeof align;
  adaptiveHPaddings?: boolean;
  vPaddings?: Space;
  justifyContent?: keyof typeof justify;
  display?: CSSProperties['display'];
};

export const Box: FC<Props> = ({
  direction = 'horizontal',
  space = 'xs',
  alignItems = 'start',
  adaptiveHPaddings = false,
  justifyContent = 'start',
  display = 'block',
  children,
  className,
  vPaddings,
}) => {
  const displayGrid = display === 'grid';

  return (
    <div
      className={cx(
        displayGrid ? flow[direction] : '',
        displayGrid ? gap[space] : '',
        displayGrid ? align[alignItems] : '',
        displayGrid ? justify[justifyContent] : '',
        vPaddings ? verticalPaddings[vPaddings] : '',
        {
          [adaptivePaddings]: adaptiveHPaddings,
          [grid]: displayGrid,
          [block]: display === 'block',
        },
        className
      )}
    >
      {children}
    </div>
  );
};
