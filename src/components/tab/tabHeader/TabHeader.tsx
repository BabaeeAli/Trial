import React from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import Button from "../../button/Button";

type Props = {};

const TabHeader = (props: Props) => {
  return (
    <>
      <div className="flex flex-row px-12 h-full">
        <div className="bg-tabContent h-full py-3 w-46 grid gap-4 grid-cols-3">
          <Button
            classNames="bg-mainColor w-16 h-16 rounded-full btnTabIcon"
            children="VK"
          />

          <div>
            <p>Verkauf</p>
            <p>012</p>
          </div>

          <Button classNames="flex justify-center">
            <IoMdClose className="text-gray text-1xl  " />
          </Button>
        </div>

        <Button
          classNames="px-6"
          children={<IoMdAdd className="text-white text-3xl" />}
        />
      </div>
    </>
  );
};

export default TabHeader;
