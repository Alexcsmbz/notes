import { FC, memo } from 'react';
import {
  DebounceInput as ReactDebounceInput,
  DebounceInputProps,
} from 'react-debounce-input';
import { Input, Props } from '../../primitives/input';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DebounceInput: FC<DebounceInputProps<any, Props>> = memo(
  ({ debounceTimeout = 500, ...props }) => (
    <ReactDebounceInput
      debounceTimeout={debounceTimeout}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      element={Input as any}
      {...props}
    />
  )
);
