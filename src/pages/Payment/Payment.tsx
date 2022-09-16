import TabHeader from "../../components/tab/tabHeader/TabHeader";
import TabLayout from "../../components/tab/TabLayout";
import Navbar from "../../layouts/navbar/Navbar";
import "./Payment.css";
type Props = {};

const Payment = (props: Props) => {
  return (
    <>
      <div className="screen bg-mainColor	flex align-middle flex-col ">
        <div className="flex justify-between items-end">
          <Navbar />

          <TabHeader />
        </div>
        <TabLayout />
      </div>
    </>
  );
};

export default Payment;
