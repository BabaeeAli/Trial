import React from "react";
import TabChild from "./tabChild/TabChild";
import TabContent from "./tabContent/TabContent";

type Props = {};

const TabLayout = (props: Props) => {
  return (
    <>
      <div className="mx-2">
        <TabContent />
        <TabChild />
      </div>
    </>
  );
};

export default TabLayout;
