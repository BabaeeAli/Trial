import cn from "classnames";
import React, { FC } from "react";


export type Props = {
  children?: React.ReactNode | React.ReactNode[];
  classNames?:any
  handleClick?: (
    e: React.MouseEvent<HTMLElement>
  ) => any
  names?:any
  disables?:boolean
} 

const Button: FC<Props> = ({ children,classNames,handleClick,names,disables }) => {
  return (
    <>
      
        <button onClick={handleClick} className={cn(classNames)} name={names} disabled={disables} >{children}</button>
      
    </>
  );
};

export default Button;
