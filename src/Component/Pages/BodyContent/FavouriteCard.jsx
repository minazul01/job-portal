import { FaLocationDot } from "react-icons/fa6";
import { BsBagDash } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const FavouriteCard = ({ data }) => {
  const {
    title,
    location,
    description,
    company_logo,
    jobType,
    category,
    applicationDeadline,
    requirements,
    salaryRange,
    _id,
  } = data;

  const [first, second, third, fouth] = requirements;

  return (
    <div className="card bg-gray-200 w-78 shadow-sm">
      <div className="card-body p-2 rounded-md border-[1px] border-gray-400 gap-3">
        <div className="flex items-center gap-3 mb-5">
          <div className="">
            <img className="w-[60px]" src={company_logo} alt={title} />
          </div>
          <div className="">
            <h2 className="text-2xl font-medium">{title}</h2>
            <div className="flex items-center gap-2 text-gray-500">
              <FaLocationDot />
              {location}
            </div>
          </div>
        </div>

        <h2 className="card-title text-2xl font-bold">{category}</h2>
        <div className="flex items-center gap-5 my-3 text-gray-400 ">
          <div>
            <div className="flex items-center gap-1">
              <BsBagDash />
              {jobType}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <IoTimeOutline />
              {applicationDeadline}
            </div>
          </div>
        </div>
        <p className="text-base text-gray-500">{description}</p>
        <div className="space-x-3 space-y-2.5 my-5">
          <button className="bg-gray-300 p-1 rounded-md  hover:text-blue-400 cursor-pointer">
            {first}
          </button>
          <button className="bg-gray-300 p-1 rounded-md hover:text-blue-400 cursor-pointer">
            {second}
          </button>
          <button className="bg-gray-300 p-1 rounded-md hover:text-bltext-400 cursor-pointer">
            {third}
          </button>
          <button className="bg-gray-300 p-1 rounded-md hover:text-blue-400 cursor-pointer">
            {fouth}
          </button>
        </div>
        <div className="card-actions flex items-center justify-between">
          <div className=" text-xs text-[#3C65F5] font-medium">
            <span className="text-xs text-black">Salary :</span> $
            {salaryRange?.max} - ${salaryRange.min}
          </div>
          <div>
            <Link className="text-base font-normal p-2 ml-7 bg-[#3C65F5] rounded-lg cursor-pointer hover:bg-gray-200" to={`/details/${_id}`}>
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteCard;
