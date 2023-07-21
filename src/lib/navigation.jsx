import {
  HiOutlineBookmarkAlt,
  HiOutlineCash,
  HiOutlineChatAlt,
  HiOutlineCog,
  HiOutlineFingerPrint,
  HiOutlineFolderOpen,
  HiOutlineHome,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";


export const DASHBOARD_SIDEBAR_NAV_TOP = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineHome size={28} className="text-gray-400" />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/customer",
    icon: <HiOutlineFingerPrint size={28} className="text-orange-300" />,
  },
  {
    key: "products",
    label: "products",
    path: "/products",
    icon: <HiOutlineFolderOpen size={28} className="text-red-300"/>,
  },
  {
    key: "transaction",
    label: "Transaction",
    path: "/transaction",
    icon: <HiOutlineCash size={28} className="text-emerald-500"/>,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/orders",
    icon: <HiOutlineBookmarkAlt size={28} className="text-violet-500"/>,
  },
  {
    key: "message",
    label: "Messages",
    path: "/message",
    icon: <HiOutlineChatAlt size={28} className="text-teal-50"/>,
  },
];

export const DASHBOARD_SIDEBAR_NAV_BOTTOM = [
  {
    key: "setting",
    label: "Settings",
    path: "/setting",
    icon: <HiOutlineCog size={28} className="text-fuchsia-900 " />,
  },
  {
    key: "support",
    label: "Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle size={28}  className=" text-teal-200"/>,
  },
];
