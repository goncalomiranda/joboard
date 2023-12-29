import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient("http://localhost:9000/graphql");

export async function getJobs() {
  const query = gql`
    query {
      jobs {
        title
        id
        date
        company {
          id
          name
        }
      }
    }
  `;
  const data = await client.request(query);
  return data.jobs;
}

export async function getJob(id) {
  const query = gql`
    query JobById($id: ID!) {
      job(id: $id) {
        title
        id
        date
        company {
          id
          name
        }
        description
      }
    }
  `;
  const data = await client.request(query, { id });
  console.log("job: " + data.job);
  return data.job;
}

export async function getCompany(id) {
  const query = gql`
    query CompanyById($id: ID!) {
      company(id: $id) {
        id
        name
        description
      }
    }
  `;
  const data = await client.request(query, { id });
  console.log("company: " + data.company);
  return data.company;
}
