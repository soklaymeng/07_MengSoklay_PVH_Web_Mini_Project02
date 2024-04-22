import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";

const LayoutPage = () => {
  return (
    <main>
      <div className="flex w-full">
        <div className="w-[20%]">
          <SidebarComponent />
        </div>
        <div className="w-[80%]">
          <NavbarComponent />
          <ListBoardComponentHeader />
        </div>
      </div>
    </main>
  );
};

export default LayoutPage;
