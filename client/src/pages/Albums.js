import { CardsList, LoadingList, PageHeader } from '../components/index';
import { useQuery, gql } from '@apollo/client';

const GET_ALL_ALBUMS = gql`
  query {
    allAlbums {
      id,
      name,
      cover
    }
  }
`;

export const Albums = () => {
  const { loading, data, error } = useQuery(GET_ALL_ALBUMS);
  if (error) return `Error ${error}`

  return (
    <>
      <PageHeader title="Albums" />
      {loading
        ? <LoadingList />
        : < CardsList items={data.allAlbums} />
      }
    </>
  )
}
