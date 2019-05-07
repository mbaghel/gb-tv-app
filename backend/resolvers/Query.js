const Query = {
  getLatest: async (parent, args, ctx, info) => {
    const data = await ctx.dataSources.VideosAPI.getLatest();
    return data.results;
  },
  isRegistered: (parent, args, ctx, info) => {
    return ctx.regCode ? true : false;
  }
};

module.exports = Query;
