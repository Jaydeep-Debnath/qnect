
const styles = {
    // borderNorm: "border-solid border-2 border-slate-100 rounded-full",
    // borderS: "border-solid border-2 border-slate-100 rounded-lg",
    // anal: " dark ml-28 w-8/12 dark:bg-slate-800 dark:text-white ",
    // navHead: "sm:text-sm md:text-md xl:text-lg font-bold xl:px-4 md:px-2 text-slate-400",
    // navEnd: "sm:text-sm md:text-md xl:text-lg font-bold xl:px-4 md:px-2 ",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-start items-start",
    flexBetween: "flex justify-between items-center",
    
    flexSS: "flex justify-start items-center",
    flexBB: "flex justify-center items-start",
    
    icon: "text-white text-2xl xl:text-3xl mr-4 ",
    icon2: "text-white text-2xl mr-2 ",
    icon3: "text-rose-2 text-2xl xl:text-3xl mr-2 ",
    icon4: "text-rose-2 text-xl mx-2 md:mx-4 ",
    icon5: "text-rose-1 text-2xl xl:text-3xl mr-2 ",
    icon6: "text-rose-1 text-xl mx-4 ",
    
    skills: "w-full my-1 text-center text-xs p-2 bg-dark-3 rounded-lg",
    likes_num: "text-sm md:text-lg text-beige mx-0 md:mx-2",

    
    right_side: "float-right bottom-20 top-20 right-0 fixed bg-dark-1 h-screen w-1/5 hidden md:flex",
    left_side: "float-left bottom-20 top-20 left-0 fixed h-screen w-1/5 py-6 hidden md:flex",

    hero: "flex-col bg-dark-2 h-auto w-full",
    

    divVerL: "border-x-2 border-biege h-screen p-4",
    divVerR: "border-x-2 border-biege h-screen p-4",
    divHor: "border-b-2 border-beige ",
};
  
export const layout = {
    left_bar: ` ${styles.flexSS} bg-dark-1 flex-col ${styles.left_side}`,
    right_bar: `${styles.right_side} ${styles.flexSS} flex-col `,

    footer: `${styles.flexBetween} bg-dark-1 h-20 w-full bottom-0 fixed ${styles.divHor} `,
    navbar: `${styles.flexBetween} bg-dark-1 h-20 w-full fixed px-8  `,

    hero: `${styles.flexSS} ${styles.hero} flex-col px-5 md:mx-0`,
    ask: `${styles.flexCenter} rounded-xl bg-dark-1 w-full md:w-7/12 h-20 mt-[94px] mb-2 p-4 `,
    ans: `${styles.flexBetween} flex-col rounded-xl bg-dark-1 w-full md:w-7/12 h-auto my-2 `,

    route: ` ${styles.flexSS} w-full h-16 px-4 xl:px-8 text-beige text-lg xl:text-xl hover:bg-rose-2 hover:w-full hover:text-white hover:border-r-8 hover:border-rose-1 `,
    
    right_sec1: `${styles.flexCenter} rounded-lg bg-dark-2 w-5/6 h-16 my-2 `,
    right_sec2: `${styles.flexCenter} rounded-lg bg-dark-2 w-5/6 h-40 my-2 `,


    deets: `${styles.flexSS} w-full px-4`,
    question: `${styles.flexBetween} text-xl text-white px-4 my-4`,
    skillset: `${styles.flexCenter} w-1/12 flex-col hidden md:block`,
    answer: `${styles.flexBetween} px-4`,
    likes: `${styles.flexBetween} rounded-b-xl bg-dark-3 w-full h-12 p-1 md:p-4 mt-2 md:mt-4`,
    
    bord: `mx-4 ${styles.flexCenter} ${styles.borderS} p-1 text-sm `,
    
    //bord: `mx-4 ${styles.flexCenter} ${styles.borderS} p-1 text-sm `,
};
  
export default styles;