import { getStatList } from "@/lib/apiData";
import { LayoutDashboard, Smile, ThumbsUp, Users } from "lucide-react";

const StatList = async () => {
    const data = await getStatList();
    return (
        <div className="pt-10 md:pt-16 lg:pt-20 pb-10">
            <div className="container mx-auto p-4 grid md:grid-cols-3 lg:grid-cols-4 gap-10">
                <div className="flex items-center flex-col shadow-2xl rounded-2xl py-7">
                    <div className="bg-[#D7F5DC] p-6 rounded-lg">
                        <Users size={32} />
                    </div>
                    <h2 className="font-poppins text-3xl font-semibold py-5">
                        {data.followers}
                    </h2>
                    <p className="font-medium">Followers</p>
                </div>
                <div className="flex items-center flex-col shadow-2xl rounded-2xl py-7">
                    <div className="bg-[#D7F5DC] p-6 rounded-lg">
                        <ThumbsUp size={32} />
                    </div>
                    <h2 className="font-poppins text-3xl font-semibold py-5">
                        {data.solved}
                    </h2>
                    <p className="font-medium">Solved</p>
                </div>
                <div className="flex items-center flex-col shadow-2xl rounded-2xl py-7">
                    <div className="bg-[#D7F5DC] p-6 rounded-lg">
                        <Smile size={32} />
                    </div>
                    <h2 className="font-poppins text-3xl font-semibold py-5">
                        {data.customers}
                    </h2>
                    <p className="font-medium">Customers</p>
                </div>
                <div className="flex items-center flex-col shadow-2xl rounded-2xl py-7">
                    <div className="bg-[#D7F5DC] p-6 rounded-lg">
                        <LayoutDashboard size={32} />
                    </div>
                    <h2 className="font-poppins text-3xl font-semibold py-5">
                        {data.projects}
                    </h2>
                    <p className="font-medium">Projects</p>
                </div>
            </div>
        </div>
    );
};

export default StatList;
