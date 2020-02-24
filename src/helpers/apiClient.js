import settings from "../settings";

export default class ApiClient {
  static get(path){
    return fetch(`${settings.backendUrl}${path}`).then(res=> res.json());
  }

  static getMetrics() {
    return this.get('/metrics')
  }
}
