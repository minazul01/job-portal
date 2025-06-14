import { useEffect, useState } from "react";
import useAuth from "../../Layouts/CoustomHook/Context";
import Swal from "sweetalert2";
import axios from "axios";

const MyJob = () => {
  const { user } = useAuth();

  const [job, setJob] = useState([]);


  useEffect(() => {
    // fetch(`http://localhost:5000/job-application?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    
    axios.get(`http://localhost:5000/job-application?email=${user.email}`,
      {withCredentials: true}
    )
    .then(res => setJob(res.data))
  }, [user.email]);

  //   delete my job post
  const handleDelete = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/job-application/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged && data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const reaming = job.filter(job => job._id !== id);
                setJob(reaming);
            }
          });
      }
    });
  };

  return (
    <div className=" my-20 p-5 shadow-2xs bg-base-200 rounded-lg w-3/5 mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>active button</th>
            </tr>
          </thead>
          <tbody>
            {job && job.length > 0 ? (
              job.map((job, index) => (
                <tr key={job._id}>
                  <th>{index + 1}</th>
                  <td>{job?.title}</td>
                  <td>{job.user_email}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(job._id)}
                      className="p-1 bg-blue-500 rounded-md hover:bg-gray-200 cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-4 text-red-500 font-semibold"
                >
                  Not Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJob;
