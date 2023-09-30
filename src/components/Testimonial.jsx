import { getTestimonialList } from "@/lib/apiData";
import Image from "next/image";

const Testimonial = async () => {
    const data = await getTestimonialList();
    return (
        <div className="container mx-auto p-4">
            <div>
                <h4 className="text-[#20B15A] font-medium text-xl">
                    Testimonial List
                </h4>
                <h2 className="font-extrabold text-3xl max-w-lg pt-4 leading-10">
                    Better Agency/SEO Solution At Your Fingertips
                </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-10 pt-10 md:pt-14 lg:pt-20">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="text-center shadow-xl rounded-xl px-4 py-10"
                    >
                        <div className="flex justify-center">
                            <Image
                                src={item.image}
                                alt=""
                                height={500}
                                width={500}
                                className="h-20 w-20 rounded-lg"
                            />
                        </div>
                        <p className="text-[#9D9D9D] leading-6 py-5">
                            {item.msg}
                        </p>
                        <h2 className="font-semibold text-2xl leading-10">
                            {item.name}
                        </h2>
                        <h4>{item.designation}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
