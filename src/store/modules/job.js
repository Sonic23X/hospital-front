import Job from "../../data/job.json"
import Jobs from "../../data/job.json"
import data from "../../data/job.json"

const state = {
	job : Job.job,
	jobs : Jobs.jobs,
	data:data.data
};

export default {
	namespaced: true,
	state,
	
};