import { getWorkList } from "@/lib/apiData";
import Image from "next/image";
import Link from "next/link";

const WorkList = async () => {
    const data = await getWorkList();
    return (
        <div>
            <div className="container mx-auto px-4 py-10">
                <div>
                    <h4 className="font-poppins text-xl text-[#20B15A] uppercase pb-4">
                        Work List
                    </h4>
                    <h2 className="font-semibold text-3xl max-w-2xl">
                        We provide the Perfect Solution to your business growth
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-16 lg:mt-20 gap-6">
                    {data.map((item) => (
                        <div key={data.id}>
                            <div className="bg-[#D7F5DC] rounded-2xl p-5 max-w-max mb-5">
                                <Image
                                    src="/Activity.png"
                                    alt=""
                                    height={500}
                                    width={500}
                                    className="h-7 w-7"
                                />
                            </div>
                            <div>
                                <h2 className="font-semibold font-poppins text-2xl pb-5">
                                    {item.title}
                                </h2>
                                <p className="font-sen text-xl leading-6">
                                    {item.des}
                                </p>
                                <Link
                                    href="#"
                                    className="flex gap-3 items-center mt-16"
                                >
                                    Learn More <img src="/arrow.png" alt="" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkList;
