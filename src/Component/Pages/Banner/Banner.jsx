import happyTeam from "../../../assets/happpyTeam.jpg";
import happyTeamTwo from "../../../assets/happyTeamTwo.jpg";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="md:flex gap-12 items-center justify-center w-[80%] mx-auto my-25">
      <div className="lg:w-1/2 p-3">
        <h1 className="text-5xl font-bold leading-[3.5rem]">
          The <span className="text-[#3C65F5]">Easiest Way <br /> </span>
          to Get Your New Job
        </h1>

        <p className="text-lg text-gray-500 my-5">
          Each month, more than 3 million job seekers turn to website in their
          search for work, making over 140,000 applications every single day.
        </p>
      </div>
      <div className="lg:w-1/2 ">
        <motion.img
          className="w-[220px] lg:w-[300px] rounded-t-4xl rounded-br-4xl  border-l-8 border-b-8 border-blue-600"
          src={happyTeam}
          animate={{y: [0, 30, 0]}}
          transition={{duration: 5, repeat: Infinity}}
          alt="Happy team"
        />
        <motion.img
          className="w-[220px] lg:w-[300px] rounded-t-4xl rounded-br-4xl  border-l-8 border-b-8 border-blue-600"
          src={happyTeamTwo}
          animate={{x: [100, 150, 80, ]}}
          transition={{duration: 5, repeat: Infinity}}
          alt="Happy team"
        />
      
      </div>
    </div>
  );
};

export default Banner;
