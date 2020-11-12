import { PageHeader, CardsList, LoadingList } from '../components/index';
import { useQuery, gql } from '@apollo/client';

const GET_ALL_ARTISTS = gql`
  query {
    allArtists {
      id,
      stageName,
      cover
    }
  }
`


export const Artistes = () => {
  const { loading, data, error } = useQuery(GET_ALL_ARTISTS);
  if (error) return `Error ${error}`;

  return (
    <>
      <PageHeader title="Artistes" />
      {loading
        ? <LoadingList />
        : < CardsList items={data.allArtists} />
      }
    </>
  )
}
