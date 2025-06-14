import { useNavigate, useParams } from "react-router-dom";

import useAuth from "../../Layouts/CoustomHook/Context";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const { user } = useAuth();

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    // console.log(linkedin, github, resume)
    const jobApplication = {
      job_id: id,
      user_email: user.email,
      linkedin,
      github,
      resume,
    };

    fetch("http://localhost:5000/job-application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Apply success!",
            icon: "success",
            draggable: true,
          });
          navigate("/my_jobs");
        }
      })
      .catch((err) => {
        console.error("Error in POST:", err);
      });
  };

  return (
    <div className="border-2 w-1/2 mx-auto p-6 rounded-xl shadow-md h-screen">
      <h3 className="text-2xl font-bold text-center mb-6 text-blue-500">
        Apply for Job
      </h3>

      <form onSubmit={handleApply} className="space-y-6">
        {/* LinkedIn */}
        <div>
          <label htmlFor="linkedin" className="block font-medium mb-1">
            LinkedIn
          </label>
          <div className="flex items-center gap-2">
            <input
              id="linkedin"
              name="linkedin"
              type="url"
              required
              placeholder="https://linkedin.com/in/yourprofile"
              pattern="https?://.+"
              title="Must be a valid URL"
              className="w-full h-12 px-4 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-all duration-300"
            />
          </div>
        </div>

        {/* GitHub */}
        <div>
          <label htmlFor="github" className="block font-medium mb-1">
            GitHub
          </label>
          <input
            id="github"
            name="github"
            type="url"
            required
            placeholder="https://github.com/yourusername"
            pattern="https?://.+"
            title="Must be a valid URL"
            className="w-full h-12 px-4 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-all duration-300"
          />
        </div>

        {/* Resume */}
        <div>
          <label htmlFor="resume" className="block font-medium mb-1">
            Resume
          </label>
          <input
            id="resume"
            name="resume"
            type="url"
            required
            placeholder="https://yourdomain.com/resume.pdf"
            pattern="https?://.+"
            title="Must be a valid URL"
            className="w-full h-12 px-4 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition-all duration-300"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApply;
