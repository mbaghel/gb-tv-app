const { RESTDataSource } = require("apollo-datasource-rest");

const baseURL = "https://www.giantbomb.com/api/";
const userAgent = "VewdApp (test)";

class VideosAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = baseURL;
  }

  willSendRequest(request) {
    request.headers.set("User-Agent", userAgent);
    request.params.set("api_key", this.context.gbToken || process.env.GB_KEY);
    request.params.set("format", "json");
  }

  async getLatest() {
    return this.get("videos/", {
      limit: 10,
      field_list: "id,name,deck,premium,length_seconds"
    });
  }
}

exports.VideosAPI = VideosAPI;
