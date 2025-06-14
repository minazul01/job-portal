import { useEffect, useState } from "react";
import useAuth from "../../Layouts/CoustomHook/Context";
import axios from "axios";


const MyJobPost = () => {
    const [job, setJob] = useState([]);
    console.log(job)

    const {user} = useAuth();
    console.log(user.email)

    useEffect(() => {
        // fetch(`http://localhost:5000/jobs?email=${user?.email}`)
        // .then(res => res.json())
        // .then(data => setJob(data))
        axios.get(`http://localhost:5000/jobs?email=${user?.email}`,
            {withCredentials: true}
        )
        .then(res => setJob(res.data))


    }, [user?.email])
    return (
        <div>
            tottal my job {job.length}
        </div>
    );
};

export default MyJobPost;