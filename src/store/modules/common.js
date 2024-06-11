
import projects from '../../data/project.json';
import bookmark from "../../data/bookmark.json"

const state = {
	allprojects : projects.all,
	doingprojects : projects.Doing,
	doneprojects : projects.Done,
	bookmark : bookmark.data,
};


const mutations = {
	
};


const actions = {
};

export default {
	namespaced: true,
	state,
	
	actions,
	mutations
};