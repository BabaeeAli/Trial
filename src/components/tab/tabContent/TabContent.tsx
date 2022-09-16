import { useEffect, useRef, useState } from "react";

import Input from "../../input/Input";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooks";
import { addAmount } from "../../../Providers/Pay/paySlice";
import { addkey } from "../../../Providers/KeyPad/keyPadSlice";
import { toast } from "react-toastify";

type Props = {};

const TabContent = (props: Props) => {
  const payRef = useRef<HTMLInputElement>(null);
  const givenRef = useRef<HTMLInputElement>(null);
  const [givenInpuValue, setGivenInpuValue] = useState<String>("");
  const [paymentInpuValue, setPaymentInpuValue] = useState<String>("");
  const [focuse, setfocus] = useState<String>("");
  const [disable, setDisable] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const given = useAppSelector((state) => state.ongivens.amount);
  const keypad = useAppSelector((state) => state.onkeyPads.amount);

  const onPayment = (e: any) => {
    if (+e.target.value.replace(/[^0-9]/g, "")) {
      if (e.key === "Enter") {
        dispatch(
          addAmount(
            e.target.value.replace(/[^0-9,.]/g, "").replaceAll(",", ".")
          )
        );
        setDisable(false);
      }
      givenRef.current?.focus();
    } else {
      toast.info("Please enter the to Pay price ");
    }
  };
  useEffect(() => {
    payRef.current?.focus();
  }, []);

  useEffect(() => {

    if (!disable) {
      if (+givenInpuValue > 10000) {
        toast.error("The given price should be between 1 to 100,000");

      }else{
        if (given) {
          setGivenInpuValue(given);
        } else {
          setGivenInpuValue(keypad);
        }
      }
    } else {
      if (+paymentInpuValue > 10000) {
        toast.error("The to pay price should be between 1 to 100,000");
      } else {
        setPaymentInpuValue(keypad);
      }
    }
  }, [given, keypad]);

  return (
    <>
      <div className="bg-tabContent flex justify-center">
        <div className="flex flex-col mx-24 py-28 items-center">
          <div className="flex justify-start bg-white w-full text-gray text-xl px-7 pb-8 mb-1 mx-16">
            <p className="w-1/4">Zu Zuhlen</p>
            <Input
              handleKeyPress={(e) => onPayment(e)}
              values={new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
              }).format(
                paymentInpuValue ? parseFloat(paymentInpuValue.toString()) : 0
              )}
              checkFocus={(e) => setfocus("pay")}
              checkblur={(e) => dispatch(addkey(""))}
              ref={payRef}
            />
          </div>
          <div className="flex justify-start bg-white w-full text-gray text-xl pb-8 px-7  mx-16">
            <p className="w-1/4">Gegeben</p>

            <Input
              handleKeyPress={(e) => onPayment(e)}
              values={new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
              }).format(
                givenInpuValue ? parseFloat(givenInpuValue.toString()) : 0
              )}
              ref={givenRef}
              checkFocus={(e) => setfocus("given")}
              disables={disable}
              checkblur={(e) => dispatch(addkey(""))}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TabContent;
