const jwt = require("jsonwebtoken");

const Mutation = {
  signin: async (parent, args, ctx, info) => {
    const authObj = await ctx.dataSources.AuthAPI.signin(args.appCode);
    if (!authObj.regToken) {
      throw new Error(
        "Failed to register application, incorrect or expired code."
      );
    }

    const gbToken = jwt.sign(
      { regCode: authObj.regToken },
      process.env.APP_SECRET
    );

    const expires = new Date(authObj.expiration * 1000);

    ctx.res.cookie("gbToken", gbToken, {
      httpOnly: true,
      expires
    });
    return {
      message: `Application registered until ${expires.toDateString()}`
    };
  }
};

module.exports = Mutation;
