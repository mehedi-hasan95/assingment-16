import { getHeroData } from "@/lib/apiData";
import Image from "next/image";
import BrandList from "./BrandList";
const Hero = async () => {
    const data = await getHeroData();
    return (
        <div className="bg-[#D7F5DC] py-10">
            <div className="container mx-auto p-4 flex gap-10 font-poppins flex-col md:flex-row items-center pb-16">
                <div className="md:w-2/5">
                    <h1 className="font-bold text-5xl leading-[65px]">
                        {data.title}
                    </h1>
                    <p className="font-sen font-medium text-xl pt-5">
                        {data.description}
                    </p>
                    <button className="font-poppins text-xl bg-[#20B15A] px-4 py-3 rounded-lg mt-10 text-white">
                        Get Started
                    </button>
                </div>
                <div className="md:w-3/5">
                    <div className="flex flex-col md:flex-row gap-10">
                        <Image
                            src={data.image1}
                            alt=""
                            height={500}
                            width={500}
                            className="md:w-2/3 bg-cover h-72"
                        />
                        <Image
                            src={data.image2}
                            alt=""
                            height={500}
                            width={500}
                            className="md:w-1/3 bg-cover h-72"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-10 mt-10">
                        <Image
                            src={data.image3}
                            alt=""
                            height={500}
                            width={500}
                            className="md:w-1/3 bg-cover h-72"
                        />
                        <Image
                            src={data.image4}
                            alt=""
                            height={500}
                            width={500}
                            className="md:w-2/3 bg-cover h-72"
                        />
                    </div>
                </div>
            </div>
            <BrandList />
        </div>
    );
};

export default Hero;
