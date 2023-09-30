import { getBrandList } from "@/lib/apiData";
import Image from "next/image";

const BrandList = async () => {
    const data = await getBrandList();
    return (
        <div>
            <div className="container mx-auto flex md:justify-between py-8 px-4 flex-wrap gap-10">
                {data.map((item) => (
                    <Image
                        src={item.image}
                        alt=""
                        height={500}
                        width={500}
                        key={item.id}
                        className="h-16 w-24"
                    />
                ))}
            </div>
        </div>
    );
};

export default BrandList;
