import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddJob = () => {
  const navigate = useNavigate();
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const intialValue = Object.fromEntries(formData.entries());

    const { max, min, currency, ...newData } = intialValue;
    newData.salaryRange = { max, min, currency };

    newData.requirements = newData.requirements.split(",");

    newData.responsibilities = newData.responsibilities.split(",");
    console.log(newData);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged && data.insertedId) {
          Swal.fire({
            title: "Added!",
            icon: "success",
            draggable: true,
          });
          navigate("/my_post_job")
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleAdd} className="space-y-3 md:w-3/5 mx-auto my-10">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            className="input input-bordered w-full"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            name="location"
            className="input input-bordered w-full"
          />
        </div>

        {/* Job Type */}
        <div>
          <label className="block text-sm font-medium">Job Type</label>
          <select name="jobType" className="select select-bordered w-full">
            <option>Full time</option>
            <option>Part time</option>
            <option>Hybrid</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium">Category</label>
          <select name="category" className="select select-bordered w-full">
            <option>Engineering</option>
            <option>Marketing</option>
            <option>GraphisDEsign</option>
          </select>
        </div>

        {/* Application Deadline */}
        <div>
          <label className="block text-sm font-medium">
            Application Deadline
          </label>
          <input
            type="date"
            name="applicationDeadline"
            className="input input-bordered w-full"
          />
        </div>

        {/* Salary Range */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">Min Salary</label>
            <input
              type="number"
              name="min"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Max Salary</label>
            <input
              type="number"
              name="max"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Currency</label>
            <select
              defaultValue={"curency"}
              name="currency"
              className="select select-bordered w-full"
            >
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium">Company</label>
          <input
            type="text"
            name="company"
            className="input input-bordered w-full"
          />
        </div>

        {/* Requirements */}
        <div>
          <label className="block text-sm font-medium">
            Requirements (Comma separated)
          </label>
          <input
            type="text"
            name="requirements"
            className="input input-bordered w-full"
          />
        </div>

        {/* Responsibilities */}
        <div>
          <label className="block text-sm font-medium">
            Responsibilities (Comma separated)
          </label>
          <input
            type="text"
            name="responsibilities"
            className="input input-bordered w-full"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium">Status</label>
          <select name="status" className="select select-bordered w-full">
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* HR Email */}
        <div>
          <label className="block text-sm font-medium">HR Email</label>
          <input
            type="email"
            name="hr_email"
            className="input input-bordered w-full"
          />
        </div>

        {/* HR Name */}
        <div>
          <label className="block text-sm font-medium">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input input-bordered w-full"
          />
        </div>

        {/* Company Logo URL */}
        <div>
          <label className="block text-sm font-medium">Company Logo URL</label>
          <input
            type="url"
            name="company_logo"
            className="input input-bordered w-full"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            rows="4"
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="btn btn-primary w-full">
            Submit Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
