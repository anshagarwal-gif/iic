const Card1 = () => {
    return (
        <div className="relative rounded-[5px] overflow-hidden flex flex-row items-center justify-center p-5 gap-[20px] text-center text-3xl text-black font-barlow-semi-condensed">
            <div className="relative group rounded-3xl bg-white box-border w-[36.09375rem] h-[33.40625rem] overflow-hidden border-[0.125rem] border-solid border-black transition-all duration-300">
                <div className="absolute top-0 left-0 rounded-3xl bg-blanchedalmond box-border w-[36.09375rem] h-[33.40625rem] overflow-hidden">
                    <b className="absolute top-[16.70313rem] left-[15rem] leading-[100%] text-[5rem] text-shadow: 0.16875rem 0 0.125rem rgba(250, 130, 49, 0.5) group-hover:top-[11.5rem] transition-all">
                        1.0
                    </b>
                    <b className="absolute top-[11.375rem] left-[7rem] leading-[100%] text-shadow: 0.16875rem 0 0.125rem rgba(250, 130, 49, 0.5) text-[5rem] group-hover:top-[6.5rem] transition-all">
                        B H A R A T
                    </b>
                    <div className="text-[2rem] absolute top-[1.64063rem] left-[1.17188rem] rounded-26xl-6 bg-white w-[15.625rem] h-[4.6875rem] overflow-hidden text-lg font-source-sans-pro">
                        <div className="absolute top-[1.3rem] left-[2rem] leading-[100%] text-3xl">
                            31 Oct - 1 Nov
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-[-1rem] left-[-0.1rem] w-full h-[16rem] bg-white border-[2px] border-solid border-black rounded-tl-[15px] rounded-tr-[15px] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 z-[0]">
                </div>
                <div className="absolute top-[22rem] left-[28px] leading-[100%] font-semibold opacity-0 group-hover:opacity-100 transition-all">
                    BHARAT 1.0
                </div>
                <div className="absolute top-[24rem] left-[28px] leading-[100%] text-silver text-left inline-block w-[396px] opacity-0 group-hover:opacity-100 transition-all">
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="absolute top-[27rem] left-[25rem] rounded-[25.6px] bg-black overflow-hidden flex flex-row items-center justify-center p-[18.43198013305664px] text-left text-[16.4px] text-white font-inter opacity-0 group-hover:opacity-100 transition-all">
                    <b className="z-[2] opacity-0 group-hover:opacity-100 relative tracking-[0.04em]">Register Now</b>
                </div>

            </div>
        </div>
    );
};

export default Card1;