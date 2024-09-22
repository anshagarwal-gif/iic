const EventsContainer = () => {
    return (
      <section className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[10.938rem] box-border max-w-full text-center text-[2.5rem] text-black font-sen lg:pb-[7.125rem] lg:box-border mq750:pb-[4.625rem] mq750:box-border">
        <div className="rounded-[5rem] w-[71.125rem] rounded-[5rem] box-border flex flex-col items-start justify-start pt-[6.813rem] px-[3.25rem] pb-[5.25rem] gap-[7.938rem] max-w-full z-[3] border-[4px] border-solid border-black lg:gap-[3.938rem] lg:pt-[4.438rem] lg:px-[1.625rem] lg:pb-[3.438rem] lg:box-border mq750:gap-[2rem] mq750:pt-[2.875rem] mq750:pb-[2.25rem] mq750:box-border mq450:gap-[1rem]">
          <div className="w-[71.125rem] h-[68rem] relative rounded-[5rem] box-border hidden max-w-full border-[4px] border-solid border-black" />
          <div className="w-[51.75rem] flex flex-row items-start justify-start py-[0rem] px-[2.75rem] box-border max-w-full mq1050:pl-[1.375rem] mq1050:pr-[1.375rem] mq1050:box-border">
            <div className="flex-1 flex flex-col items-start justify-start max-w-full">
              <h1 className="m-[-10] w-[25rem] relative text-inherit leading-[150%] font-bold font-source-sans-pro inline-block max-w-full z-[1] mq450:text-[1.5rem] mq450:leading-[2.25rem] mq1050:text-[2rem] mq1050:leading-[3rem]">
                Upcoming Events
              </h1>
              <b className="font-source-sans-pro self-stretch relative text-[1.544rem] leading-[150%] text-dimgray z-[1] mq450:text-[1.25rem] mq450:leading-[1.875rem]">
                Get ready to elevate your experience at our Upcoming Events
              </b>
            </div>
          </div>
          <div className="justify-left w-[60rem] ml-[2rem] flex flex-row flex-wrap items-start justify-center pt-[6.125rem] px-[1.125rem] pb-[5.738rem] box-border relative gap-[1.119rem] max-w-full z-[1] text-left text-[1.188rem] mq750:pt-[4rem] mq750:pb-[3.75rem] mq750:box-border">
            <div className="rounded-[5rem] h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[1.8rem] box-border border-[2px] border-solid border-black" />
            <div className="flex flex-col items-start justify-start pt-[12.875rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[3rem] h-[3rem] ml-[2rem] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/back-arrow@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-row ml-[1rem] items-start justify-start py-[0rem] pr-[1.813rem] pl-[0rem] box-border relative gap-[1.131rem] min-w-[33.688rem] max-w-full z-[1] mq750:min-w-full mq1050:flex-wrap mq1050:p-[1.25rem] mq1050:box-border">
              <div className="h-full w-full absolute !m-[0] top-[0rem] right-[10rem] bottom-[0rem] left-[0rem] rounded-[4rem] box-border z-[1] border-[1.4px] border-solid border-black" />
              <div className="h-[29.45rem] flex-1 relative min-w-[16.563rem] max-w-full z-[2]">
                <div className="absolute top-[0rem] left-[0rem] w-full h-full">
                  <img
                    className="absolute top-[0rem] left-[0rem] rounded-[4rem] w-full h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/people@2x.png"
                  />
                  <div className="absolute top-[0rem] left-[0rem] rounded-[4rem] box-border w-full h-full z-[1] border-[1.4px] border-solid border-black" />
                </div>
                <div className="absolute top-[1.963rem] left-[1.838rem] rounded-[4rem]  bg-white w-[9.206rem] h-[2.375rem] z-[2]" />
                <b className="font-source-sans-pro absolute top-[2.256rem] left-[2.794rem] leading-[1.813rem] inline-block min-w-[2.875rem] z-[3]">
                  Date
                </b>
              </div>
              <div className="w-[23.513rem] flex flex-col items-start justify-start pt-[2.675rem] px-[0rem] pb-[0rem] box-border min-w-[23.513rem] max-w-full text-center text-[2.375rem] mq750:min-w-full mq450:pt-[1.75rem] mq450:box-border mq1050:flex-1">
                <div className="self-stretch flex flex-col items-start justify-start gap-[6.881rem] mq450:gap-[3.438rem]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.944rem]">
                    <h1 className="font-source-sans-pro m-0 w-[14.063rem] relative text-inherit leading-[150%] font-bold font-source-sans-pro inline-block mq450:text-[1.438rem] mq450:leading-[2.125rem] mq1050:text-[1.875rem] mq1050:leading-[2.875rem]">
                      Event Name
                    </h1>
                    <div className="font-source-sans-pro self-stretch relative text-[1.469rem] leading-[150%] text-dimgray text-left mq450:text-[1.188rem] mq450:leading-[1.75rem]">
                      Worem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[2.375rem] text-left text-[1.75rem] font-semi-bold-16">
                    <div className="flex flex-row items-start justify-start relative">
                      <div className="h-[5.7rem] w-[15.438rem] absolute !m-[0] top-[-1.556rem] right-[-3rem] rounded-[4rem] bg-yellow-300 box-border z-[2] border-[2px] border-solid border-black" />
                      <h2 className="font-source-sans-pro ml-[-1rem] relative text-inherit leading-[150%] font-medium font-source-sans-pro z-[3] mq450:text-[1.375rem] mq450:leading-[2.125rem]">
                        Register Here
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[12.875rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[3em] h-[3rem] ml-[1rem] relative object-contain z-[1]"
                alt=""
                src="/back-arrow-1@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default EventsContainer;
  