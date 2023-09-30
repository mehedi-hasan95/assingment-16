"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
    const pathname = usePathname();
    const originalString = pathname;
    const stringWithoutSlash = originalString.slice(1);
    return (
        <div className="bg-[#F8F9FC] py-16">
            <div className="container mx-auto p-4">
                <h2 className="text-3xl font-semibold capitalize">
                    {stringWithoutSlash}
                </h2>
                <div className="flex items-center pt-3">
                    <Link href="/">Home</Link>
                    <ChevronRight size={14} />
                    <Link
                        className="text-[#20B15A] capitalize"
                        href={`/${stringWithoutSlash}`}
                    >
                        {stringWithoutSlash}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
