import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <div className="bg-black py-20">
            <div className="container mx-auto p-4 text-white">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div>
                        <h2 className="text-white font-poppins font-bold text-4xl">
                            WEB LOGO
                        </h2>
                        <h4 className="font-sen text-xl leading-7 text-white max-w-sm pt-5 pb-5">
                            Some footer text about the Agency. Just a little
                            description to help people understand you better
                        </h4>
                        <div className="flex gap-4">
                            <div className="bg-[#20B15A] max-w-max p-2 rounded-full">
                                <Link href="#">
                                    <Facebook color="white" size={24} />
                                </Link>
                            </div>
                            <div className="bg-[#20B15A] max-w-max p-2 rounded-full">
                                <Link href="#">
                                    <Twitter color="white" size={24} />
                                </Link>
                            </div>
                            <div className="bg-[#20B15A] max-w-max p-2 rounded-full">
                                <Link href="#">
                                    <Linkedin color="white" size={24} />
                                </Link>
                            </div>
                            <div className="bg-[#20B15A] max-w-max p-2 rounded-full">
                                <Link href="#">
                                    <Instagram color="white" size={24} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <h3 className="text-xl">Quick Links</h3>
                        <Link href="#" className="text-lg">
                            Services
                        </Link>
                        <Link href="#" className="text-lg">
                            Portfolio
                        </Link>
                        <Link href="#" className="text-lg">
                            About Us
                        </Link>
                        <Link href="#" className="text-lg">
                            Contact Us
                        </Link>
                    </div>
                    <div>
                        <h3 className="text-xl pb-5">Address</h3>
                        <h4 className="font-sen font-medium text-xl leading-7">
                            Design Agency Head Office. <br />
                            Airport Road <br />
                            United Arab Emirate
                        </h4>
                    </div>
                </div>
                <p className="font-sen text-xl text-white pt-10">
                    Copyright Design Agency {currentYear}
                </p>
            </div>
        </div>
    );
};

export default Footer;
