import { getFeaturedProject } from "@/lib/apiData";
import Image from "next/image";
import Link from "next/link";
const FeaturedProject = async () => {
    const data = await getFeaturedProject();
    return (
        <div className="bg-[#F0FDF4]">
            <div className="container mx-auto px-4 py-20">
                <h2 className="uppercase text-xl text-[#20B15A]">
                    Featured Project
                </h2>
                <h3 className="text-3xl leading-10 font-semibold max-w-lg pt-7 pb-10">
                    We provide the Perfect Solution to your business growth
                </h3>
                <div className="grid md:grid-cols-3 gap-5">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="first:row-span-2 first:col-span-2"
                        >
                            <Image
                                src={item.image}
                                alt=""
                                height={500}
                                width={500}
                                className="w-full"
                            />
                            <h5 className="pt-4">{item.remark}</h5>
                            <Link
                                href="#"
                                className="text-[#1E1F4B] font-bold text-2xl leading-7"
                            >
                                {item.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;
