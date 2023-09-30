import { getAllProject } from "@/lib/apiData";
import Image from "next/image";
import Link from "next/link";

const AllProject = async () => {
    const data = await getAllProject();
    return (
        <div className="container mx-auto px-4 pt-10 md:pt-16 lg:pt-20">
            <div>
                <h4 className="text-[#20B15A] font-medium text-xl">
                    All Project
                </h4>
                <h2 className="font-extrabold text-3xl max-w-lg pt-4 leading-10">
                    Better Agency/SEO Solution At Your Fingertips
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-10">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="shadow-xl px-3 py-5 rounded-xl"
                    >
                        <Image
                            src={item.image}
                            alt=""
                            height={500}
                            width={500}
                            className="pb-5"
                        />
                        <Link
                            href="#"
                            className="font-semibold text-2xl leading-7"
                        >
                            {item.title}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllProject;
