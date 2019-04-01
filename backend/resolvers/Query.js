const Query = {
  getLatest: async (parent, args, ctx, info) => {
    const data = await ctx.dataSources.VideosAPI.getLatest();
    return data.results;
  }
};

module.exports = Query;
