import React from "react";
import { useAppSelector } from "../../app/hooks";
import { SidebarContainer } from "./Sidebar.style";

const Sidebar = () => {
  const { boards, data } = useAppSelector((state) => state);

  return (
    <SidebarContainer open={data.sideBarsOpen === "true" ? true : false}>
      Sidebar
    </SidebarContainer>
  );
};

export default Sidebar;
