"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menuList from "@/utils/Menu.json";
import { AlignLeft, X } from "lucide-react";
import { useState } from "react";

const NavMenu = () => {
    const pathname = usePathname();
    const [activeMenu, setActiveMenu] = useState(false);
    return (
        <div className={`${pathname === "/" ? "bg-[#D7F5DC]" : ""} py-5`}>
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-black text-xl font-bold">
                        Design<span className="text-[#F55F1D]">AGENCY</span>
                    </Link>
                    <div className="hidden md:flex gap-8">
                        {menuList.map((menu) => (
                            <Link
                                key={menu.id}
                                href={menu.url}
                                className={`capitalize font-medium text-black ${
                                    pathname === menu.url
                                        ? "text-green-500"
                                        : ""
                                }`}
                            >
                                {menu.name}
                            </Link>
                        ))}
                    </div>
                    <div
                        onClick={() => setActiveMenu(!activeMenu)}
                        className="cursor-pointer md:hidden"
                    >
                        {activeMenu ? <X size={32} /> : <AlignLeft size={32} />}
                    </div>
                </div>
                {activeMenu && (
                    <div className="flex gap-8 flex-col pt-5">
                        {menuList.map((menu) => (
                            <Link
                                key={menu.id}
                                href={menu.url}
                                className={`capitalize font-medium text-black ${
                                    pathname === menu.url
                                        ? "text-green-500"
                                        : ""
                                }`}
                                onClick={() => setActiveMenu(false)}
                            >
                                {menu.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavMenu;
