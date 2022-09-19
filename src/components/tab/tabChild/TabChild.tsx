import Button from "../../button/Button";
import BarChild from "./components/barChild/BarChild";

type Props = {};

const TabChild = (props: Props) => {
  const childTabs: String[] = [
    "Bar",
    "EC",
    "KreditKarte",
    "Gotschein",
    "Sonsgite",
  ];
  return (
    <>
      <div className="flex flex-row justify-center items-end bg-tabContent">
        {childTabs.map((item:any,key:any) => (
          <Button
            key={key}
            classNames="text-blue w-52 py-4 px-6 m-px bg-buttonSecondary hover:bg-mainColor active:m-0 "
            children={item}
            // handleClick
          />
        ))}
      </div>
      <div className="flex justify-center">
        <BarChild />
      </div>
    </>
  );
};

export default TabChild;
