import Button from "../../../../button/Button";
import { useAppSelector, useAppDispatch } from "../../../../../hooks/hooks";
import Modal from "../../../../modal/Modal";
import { useEffect, useState } from "react";
import { setAmount } from "../../../../../Providers/Given/givenSlice";
import { addkey } from "../../../../../Providers/KeyPad/keyPadSlice";

type Props = {};

const BarChild = (props: Props) => {
  const dispatch = useAppDispatch();
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [calulatedPrices, setCalulatedPrices] = useState<any>([]);
  const pays = useAppSelector((state) => state.onPays.amount);
  const given = useAppSelector((state) => state.ongivens.amount);
  const keypad = useAppSelector((state) => state.onkeyPads.amount);

  const btnValues = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    ["<-", 0, "."],
  ];

  const handleClick = (e: any) => {
    dispatch(setAmount(e.target.name));
    dispatch(addkey(""));
  };
  const handleKeypadClick = (e: any) => {
    dispatch(addkey(e.target.name));
    dispatch(setAmount(""));
  };

  function roundUpNearest10(num: any) {
    return Math.ceil(num / 10) * 10;
  }
  function roundUpNearest25(num: any) {
    return Math.ceil(num / 25) * 25;
  }
  function roundUpNearest50(num: any) {
    return Math.ceil(num / 50) * 50;
  }
  useEffect(() => {
    let result: Number[] = [];
    result = [
      roundUpNearest50(+pays),
      roundUpNearest25(+pays),
      roundUpNearest10(+pays),
      Math.ceil(+pays),
      +pays,
    ];
    setCalulatedPrices(result);
  }, [pays]);

  return (
    <>
      <div className="grid gap-4 grid-cols-4 w-full  mt-4 items-start">
        <div></div>
        <div className="grid grid-rows-5 ">
          {calulatedPrices.map((item: any, key: number) => (
            <Button
              names={item}
              // disables={!item?true:false}
              classNames="bg-padButton text-white text-xl  py-2 mb-1 hover:bg-buttoncyan"
              key={key}
              children={new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
              }).format(item)}
              handleClick={(e) => handleClick(e)}
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-1 ">
          {btnValues.flat().map((item: any ,key) => {
            return (
              <>
                <Button
                key={key}
                  children={item}
                  names={item}
                  handleClick={(e) => handleKeypadClick(e)}
                  classNames="bg-padButton text-white text-4xl px-7 py-2 active:bg-white hover:bg-buttoncyan"
                />
              </>
            );
          })}
        </div>
        <div className="h-full flex items-end justify-end">
          <Button
            handleClick={() => setModalShow(true)}
            children="zahlen"
            classNames="outline outline-offset-2 outline-white-500 bg-buttoncyan text-white text-xl px-10 py-3 mr-4 active:bg-white hover:bg-white"
          />
          
          {modalShow ? (
            <Modal
              handleModal={() => setModalShow(false)}
              pays={given? +given - +pays:+keypad - +pays}
            />
          ) : null}
          </div>
      </div>
    </>
  );
};

export default BarChild;
