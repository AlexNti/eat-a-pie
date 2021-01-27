import React from 'react';
import { Flex, Box } from 'theme-ui';
import { graphql } from 'gatsby';

import Cake from '../components/cake';

export default function KingPie({ data }) {
  return (
    <Flex>
      <Box>
        <Cake />
      </Box>
    </Flex>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }`;
