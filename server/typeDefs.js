const typeDefs = `

  enum Genre {
    RAP
    POP
    ROCK
    METAL
  }

  input GenreInput {
    set: [Genre!]
  }

  type Artist {
    id          :ID
    firstName   :String!
    lastName    :String!
    stageName   :String!
    cover       :String!
    age         :Int
    biography   :String
    albums      :[Album]
    songs       :[Song]
  }

  type Album {
    id      :ID!
    name    :String!
    cover   :String!
    genre   :[Genre]
    artist  :Artist
  }

  input AlbumInput {
    create: AlbumCreateManyWithoutArtistInput
  }

  input AlbumCreateManyWithoutArtistInput {
    name     :String
    cover    :String
    genre    :GenreInput
  }

  type Song {
    id        :ID!
    title     :String!
    cover     :String!
    duration  :Float
    artist    :String
  }

  input SongInput {
    create: SongCreateManyWithoutArtistInput
  }

  input SongCreateManyWithoutArtistInput {
    title     :String
    cover     :String
    duration  :Float
  }

  type Query {
    allArtists: [Artist]!
    allAlbums: [Album]!
    allSongs: [Song]!
  }

  type Mutation {
    addArtist(
      firstName: String!,
      lastName: String!,
      stageName: String!,
      cover: String!,
      age: Int,
      biography: String,
      song: SongInput,
      album: AlbumInput
    ): Artist!

    addSong(
      title: String!
      cover: String!
    ): Song!
  }
`;

module.exports = { typeDefs };