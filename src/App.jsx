import { LayoutDashboard, Home, Users, CreditCard, FileText, DollarSign, Folder, CalendarCheck, Bell, LifeBuoy, Settings} from "lucide-react";
import Sidebar, { SidebarItem } from "./components/Sidebar"

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar>
          {/* Top Section */}
          <SidebarItem icon={<Home size={20} />} text="Home" />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />

          {/* Core Features */}
          <SidebarItem icon={<Users size={20} />} text="Students" />
          <SidebarItem icon={<CreditCard size={20} />} text="Tuition Fees" />
          <SidebarItem icon={<FileText size={20} />} text="Invoices" />
          <SidebarItem icon={<DollarSign size={20} />} text="Payments" />
          <SidebarItem icon={<Folder size={20} />} text="Documents" />
          <SidebarItem icon={<CalendarCheck size={20} />} text="Absences" />
          <SidebarItem icon={<Bell size={20} />} text="Notifications" alert />

          {/* Divider */}
          <hr className="my-3" />

          {/* Bottom Section */}
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
          <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>
      </div>
    </>
  )
}

export default App