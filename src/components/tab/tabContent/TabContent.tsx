import { useEffect, useRef, useState } from "react";

import Input from "../../input/Input";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooks";
import { addAmount } from "../../../Providers/Pay/paySlice";
import { addkey } from "../../../Providers/KeyPad/keyPadSlice";

type Props = {};

const TabContent = (props: Props) => {
  const payRef = useRef<HTMLInputElement>(null);
  const givenRef = useRef<HTMLInputElement>(null);
  const [givenInpuValue, setGivenInpuValue] = useState<number>(0);
  const [paymentInpuValue, setPaymentInpuValue] = useState<number>(0);
  const [focuse, setfocus] = useState<String>("");
  const dispatch = useAppDispatch();
  const given = useAppSelector((state) => state.ongivens.amount);
  const keypad = useAppSelector((state) => state.onkeyPads.amount);
  const key = useAppSelector((state) => state.onEnter.key);
  const status = useAppSelector((state) => state.onEnter.status);

  const formatValueAsPrice = (value: number): string => {
    return value
      ? ((parseFloat(value.toString()) / 1000) * 10).toFixed(2) + "€"
      : "0";
  };
  useEffect(() => {
    payRef.current?.focus();
  }, []);

  useEffect(() => {
    if (status === true) {
      setfocus("pay");
    }
    if (focuse === "given") {
      if (given) {
        setGivenInpuValue(+given);
      } else {
        setGivenInpuValue(keypad);
      }
    } else {
      setPaymentInpuValue(keypad);
      if (key === "Enter") {
        dispatch(addAmount(+((keypad / 1000) * 10).toFixed(2)));
        givenRef.current?.focus();
      }
    }
  }, [given, keypad, key]);

  return (
    <>
      <div className="bg-tabContent flex justify-center">
        <div className="flex flex-col mx-24 py-28 items-center">
          <div className="flex justify-start bg-white w-full text-gray text-xl px-7 pb-8 mb-1 mx-16">
            <p className="w-1/4">Zu Zuhlen</p>
            <Input
              values={formatValueAsPrice(paymentInpuValue)}
              // disables={!status}
              onValueChange={() => {}}
              checkFocus={(e) => setfocus("pay")}
              checkblur={(e) => dispatch(addkey(0))}
              ref={payRef}
            />
          </div>
          <div className="flex justify-start bg-white w-full text-gray text-xl pb-8 px-7  mx-16">
            <p className="w-1/4">Gegeben</p>

            <Input
              values={formatValueAsPrice(givenInpuValue)}
              checkFocus={(e) => setfocus("given")}
              disables={status}
              checkblur={(e) => dispatch(addkey(0))}
              ref={givenRef}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TabContent;
