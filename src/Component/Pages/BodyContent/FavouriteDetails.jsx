import { Link, useLoaderData } from "react-router-dom";

const FavouriteDetails = () => {
  const data = useLoaderData();

  const {_id, title, description, company } = data;

  return (
    <div>
      <div className="card my-10 w-[350px] md:w-[800px] mx-auto bg-base-100 card-xl shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">{company}</h2>
          <h3 className="text-xl font-medium my-5">{title}</h3>
          <p>{description}</p>
          <div className=" justify-center card-actions">
            <Link to={`/job_apply/${_id}`}>
              <button className="btn btn-primary hover:bg-gray-400 cursor-pointer">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteDetails;
