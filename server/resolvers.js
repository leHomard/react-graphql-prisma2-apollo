const resolvers = {
  Query: {
    allArtists: async (parent, args, context) => {
      const artists = await context.Prisma.artist.findMany();
      return artists;
    },

    allAlbums: async (parent, args, contect) => {
      const albums = await contect.Prisma.album.findMany();
      return albums;
    },

    allSongs: async (parent, args, context) => {
      const songs = await context.Prisma.song.findMany();
      return songs;
    }
  },

  Mutation: {
    addArtist: async (parent, args, context) => {
      const artist = context.Prisma.artist.create({
        data: { ...args }
      })
      return artist;
    },

    addSong: async (parent, args, context) => {
      const song = await context.Prisma.song.create({
        data: {
          title: args.title,
          cover: args.cover
        }
      });
      return song;
    }
  }
};

module.exports = { resolvers }