const { RESTDataSource } = require("apollo-datasource-rest");

const apiURL = "https://www.giantbomb.com/api/";
const userAgent = "VewdApp (test)";

class VideosAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = apiURL;
  }

  willSendRequest(request) {
    request.headers.set("User-Agent", userAgent);
    request.params.set("api_key", this.context.regCode);
    request.params.set("format", "json");
  }

  async getLatest() {
    return this.get("videos/", {
      limit: 10,
      field_list: "id,name,deck,premium,length_seconds"
    });
  }
}

class AuthAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://www.giantbomb.com/app/vewd-test/";
  }

  willSendRequest(request) {
    request.headers.set("User-Agent", userAgent);
  }

  async signin(regCode) {
    return this.get("get-result", {
      regCode,
      format: "json"
    });
  }
}

exports.VideosAPI = VideosAPI;
exports.AuthAPI = AuthAPI;
