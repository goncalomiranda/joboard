import { getJob, getJobs } from "./db/jobs.js";
import { getCompany } from "./db/companies.js";

export const resolvers = {
    Query: {
        job: (_root,{ id}) => getJob(id),
        company: (_root, {id}) => getCompany(id),
        jobs: () => getJobs(),
    },

    Job: {
        company: (job) => {
            return getCompany(job.companyId)
        },
        date: (job) => {
            return toIsoDate(job.createdAt);
        }
    }
};


function toIsoDate(value){
    return value.slice(0,'yyyy-mm-dd'.length);
}