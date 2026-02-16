import axios from 'axios';
import { GITHUB_TOKEN } from '../utils/config.ts';

const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';

export const getPinnedRepos = async (username: string) => {
  const query = `
    query($username: String!) {
      user(login: $username) {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              stargazerCount
              primaryLanguage {
                name
                color
              }
              homepageUrl
            }
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post(
      GITHUB_GRAPHQL_URL,
      {
        query,
        variables: { username },
      },
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      }
    );

    if (response.data.errors) {
      console.error('GitHub GraphQL Errors:', response.data.errors);
      throw new Error('Error fetching data from GitHub API');
    }

    return response.data.data.user.pinnedItems.nodes;
  } catch (error) {
    console.error('GitHub Service Error:', error);
    throw error;
  }
};
