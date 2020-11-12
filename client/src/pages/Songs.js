import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { CardsList, LoadingList, PageHeader } from '../components/index';

export const GET_ALL_SONGS = gql`
  query {
    allSongs {
      id,
      title,
      cover
    }
  }
`;


export const Songs = () => {
  const { loading, data, error } = useQuery(GET_ALL_SONGS);

  if (error) return `Error ${error}`
  return (
    <>
      <PageHeader title="Morceaux" />
      {loading
        ? <LoadingList />
        : <CardsList items={data.allSongs} />
      }
    </>
  )
}
