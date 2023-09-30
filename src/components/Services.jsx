import { getAllService } from "@/lib/apiData";
import Image from "next/image";

const Services = async () => {
    const data = await getAllService();
    return (
        <div className="container mx-auto p-4">
            <div>
                <h4 className="text-[#20B15A] font-medium text-xl">
                    Our All Services
                </h4>
                <h2 className="font-extrabold text-3xl max-w-lg pt-4">
                    We Provide BestWeb design services
                </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5 md:gap-10 lg:gap-16 pt-10 md:pt-12 lg:pt-16">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="shadow-xl p-5 md:p-7 lg:p-10 rounded-xl"
                    >
                        <h2 className="font-semibold text-2xl leading-10">
                            {item.title}
                        </h2>
                        <p className="text-[#9D9D9D] pb-7">{item.des}</p>
                        <div className="flex flex-col gap-6">
                            <div className="md:flex gap-5">
                                <Image
                                    src={item.image1}
                                    alt=""
                                    height={500}
                                    width={500}
                                    className="w-2/3 rounded-2xl"
                                />
                                <Image
                                    src={item.image2}
                                    alt=""
                                    height={500}
                                    width={500}
                                    className="w-1/3 rounded-2xl"
                                />
                            </div>
                            <div className="md:flex gap-5">
                                <Image
                                    src={item.image3}
                                    alt=""
                                    height={500}
                                    width={500}
                                    className="w-1/3 rounded-2xl"
                                />
                                <Image
                                    src={item.image4}
                                    alt=""
                                    height={500}
                                    width={500}
                                    className="w-2/3 rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
