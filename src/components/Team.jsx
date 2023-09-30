import { getTeamList } from "@/lib/apiData";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Team = async () => {
    const data = await getTeamList();
    return (
        <div className="container mx-auto px-4 pt-10 md:pt-16 lg:pt-20">
            <div>
                <h4 className="text-[#20B15A] font-medium text-xl">
                    Our Team Member
                </h4>
                <h2 className="font-extrabold text-3xl max-w-lg pt-4">
                    Check our awesome team members
                </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-14 pt-10">
                {data.map((item) => (
                    <div key={item.id} className="shadow-lg rounded-2xl">
                        <div className="relative group">
                            <Image
                                src={item.image}
                                alt=""
                                height={500}
                                width={500}
                                className="max-h-96"
                            />
                            <div className="flex gap-5 left-1/2 -translate-x-1/2 bottom-10 group-hover:bottom-10 group-hover:opacity-100 transition duration-500 absolute opacity-0 bg-white px-4 py-2 rounded-full">
                                <Link href="#">
                                    <Facebook size={24} />
                                </Link>
                                <Link href="#">
                                    <Twitter size={24} />
                                </Link>
                                <Link href="#">
                                    <Instagram size={24} />
                                </Link>
                            </div>
                        </div>
                        <h2 className="text-xl text-[#101A29] font-semibold text-center pb-10 pt-5">
                            {item.name}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
