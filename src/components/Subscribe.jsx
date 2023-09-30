const Subscribe = () => {
    return (
        <div className="py-20">
            <div className="max-w-xl mx-auto p-4 text-center">
                <h4 className="text-[#20B15A] font-poppins font-medium text-xl">
                    SUBSCRIBE
                </h4>
                <h2 className="font-semibold text-3xl leading-10 pt-5">
                    Subscribe to get the latest news about us
                </h2>
                <p className="text-[#8B8B8B] font-medium">
                    Please drop your email below to get daily update about what
                    we do
                </p>
                <div className="border-2 border-black rounded-xl flex justify-between p-2 mt-10">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Adress"
                        id=""
                        className="w-full mr-2 outline-none"
                    />
                    <button className="bg-[#F55F1D] px-4 py-3 rounded-xl text-white font-medium">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
