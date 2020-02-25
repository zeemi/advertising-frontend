import settings from "../settings";

export default class ApiClient {
  static get(path){
    return fetch(`${settings.backendUrl}${path}`).then(response=> {
      if (response.status < 400) {
        return response.json()
      }
      return Promise.reject();
    });
  }

  static getMetrics() {
    return this.get('/metrics')
  }
}
