const Query = {
  getLatest: async (parent, args, ctx, info) => {
    const data = await ctx.dataSources.VideosAPI.getLatest();
    return data.results;
  },
  isRegistered: (parent, args, ctx, info) => {
    return ctx.regCode ? true : false;
  },
  getURLs: async (parent, args, ctx, info) => {
    const { results } = await ctx.dataSources.VideosAPI.getURLs(args.id);
    return {
      hd: results.hd_url,
      high: results.high_url,
      low: results.low_url,
      savedTime: results.saved_time
    };
  },
  authorizePlayback: (parent, args, ctx, info) => {
    return `${args.url}?api_key=${ctx.regCode}`;
  }
};

module.exports = Query;
