const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-poppins font-semibold text-[22px] md:text-[30px] text-white leading-[37.8px] md:leading-[66.8px] w-full",
    heading3: "font-poppins font-bold text-[20px] md:text-[24px] text-white xs:leading-[56.8px] leading-[46.8px] w-full",
    heading4: "font-poppins font-bold text-[16px] md:text-[20px] text-white xs:leading-[56.8px] leading-[46.8px] w-full",
    heading5: "font-poppins font-normal text-white text-[16px] md:text-[18px] leading-[30.8px]",
    eduHeading: "font-poppins font-bold text-[20px] md:text-[24px] text-white leading-snug w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[16px] md:text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "px-6 sm:px-16 xl:px-56",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-8 py-4 sm:pt-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;