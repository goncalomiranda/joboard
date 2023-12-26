import { getJobs } from "./db/jobs.js";
import { getCompany } from "./db/companies.js";

export const resolvers = {
    Query: {
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