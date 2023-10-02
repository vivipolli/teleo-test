import { gql } from '@apollo/client';

export const GET_SCREENSHOTS= gql`
  query GetScreenshots {
    screenshot {
      id
      kidName
      image
    }
  }
`;
