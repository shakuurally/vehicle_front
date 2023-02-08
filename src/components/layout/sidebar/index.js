import LgSidebar from "./LgSidebar";
import MobileSidebar from "./MobileSidebar";

function SampleSidebar({ sidebarOpen, setSidebarOpen, Collapse }) {
  return (
    <main>
      {/* Sidebar */}

      <div className="hidden lg:inline-flex ">
        <LgSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          Collapse={Collapse}
        />
      </div>
      <div className="inline-flex lg:hidden">
        <MobileSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
    </main>
  );
}

export default SampleSidebar;
