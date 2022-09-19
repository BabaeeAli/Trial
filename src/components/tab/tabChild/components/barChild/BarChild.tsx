import Button from "../../../../button/Button";
import { useAppSelector, useAppDispatch } from "../../../../../hooks/hooks";
import Modal from "../../../../modal/Modal";
import { useEffect, useState } from "react";
import { setAmount } from "../../../../../Providers/Given/givenSlice";
import { addkey } from "../../../../../Providers/KeyPad/keyPadSlice";
import { reset } from "../../../../../Providers/keyHandler/keyHandler";
import { addAmount } from "../../../../../Providers/Pay/paySlice";

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
  const handleModal = () => {
    setModalShow(false);
    dispatch(addkey(0));
    dispatch(setAmount("0"));
    dispatch(addAmount(0));
    dispatch(reset());

  };
  const handleClick = (e: any) => {
    dispatch(setAmount(((+e.target.name * 1000) / 10).toString()));
    dispatch(addkey(0));
  };
  const handleKeypadClick = (e: any) => {
    dispatch(addkey(e.target.name));
    dispatch(setAmount(""));
  };
  const calulation = (price: number) => {
    let result: Number[] = [];

    result = [
      price,
      Math.ceil(price),
      Math.ceil(price / 10) * 10,
      Math.round(price / 25) * 50,
      Math.ceil(price / 100) * 100,
    ];
    setCalulatedPrices(result.sort((a: any, b: any) => b - a));
  };

  useEffect(() => {
    calulation(pays);
  }, [pays]);

  return (
    <>
      <div className="grid gap-4 grid-cols-4 w-full  mt-4 items-start">
        <div></div>
        <div className="grid grid-rows-5 ">
          {calulatedPrices.map((item: any, key: any) => (
            <Button
              names={item}
              classNames="bg-padButton text-white text-xl  py-2 mb-1 hover:bg-buttoncyan"
              key={item+key}
              
              children={item.toFixed(2) + "€"}
              handleClick={(e) => handleClick(e)}
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-1 ">
          {btnValues.flat().map((item: any, key: any) => {
            return (
              <>
                <Button
                  key={item}
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
              handleModal={() => handleModal()}
              pays={
                given
                  ? +((+given / 1000) * 10).toFixed(2) - +pays
                  : (keypad / 1000) * 10 - +pays
              }
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default BarChild;
