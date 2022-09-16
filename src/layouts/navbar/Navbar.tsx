import Button from "../../components/button/Button";
import { BiLock } from "react-icons/bi";
import { TbSortDescending } from "react-icons/tb";
import { IoMdApps } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <div className="flex px-12 py-6">
        <div className="flex flex-row">
          <Button children={<BiLock className="text-white text-3xl mr-3" />} />
          <Button
            children={<IoMdApps className="text-white text-3xl mr-3" />}
          />
          <Button
            children={<TbSortDescending className="text-white text-3xl mr-3" />}
          />
        </div>

      </div>
    </>
  );
};

export default Navbar;
