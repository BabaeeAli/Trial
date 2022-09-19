import cn from "classnames";
import React, { forwardRef } from "react";

import "./Input.css";
export type Props = {
  children?: React.ReactNode | React.ReactNode[];
  classNames?: any;
  handleKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => any;
  onValueChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  values?: any;
  ref?: React.Ref<HTMLInputElement | String>;
  checkFocus?: (e: React.FocusEvent<HTMLElement>) => any;
  checkblur?: (e: React.FocusEvent<HTMLElement>) => any;
  disables?: boolean;
};

const Input = forwardRef<HTMLInputElement, Props>(
  (
    { checkFocus, checkblur, classNames, handleKeyPress,onValueChange, values, disables },
    ref
  ) => {
    return (
      <>
        <input
          className={cn("inputMain", classNames)}
          onKeyPress={handleKeyPress}
          onChange={onValueChange}
          value={values}
          ref={ref}
          onBlur={checkblur}
          onFocus={checkFocus}
          disabled={disables}
        />
      </>
    );
  }
);

export default Input;
