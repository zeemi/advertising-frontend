import settings from "../settings";

export default class ApiClient {
  static get(path) {
    return fetch(`${settings.backendUrl}${path}`).then(response => {
      if (response.status < 400) {
        return response.json()
      }
      return Promise.reject();
    });
  }

  static getMetrics(campaigns, dataSources) {
    const params = {campaigns: campaigns.join(','), 'data-sources': dataSources.join(',')};

    const queryParams = Object.entries(params).filter(([key, value]) => value).map(([key, value]) => `${key}=${value}`).join('&');
    const url = ['/metrics', queryParams].filter(value => value).join('?');

    return this.get(url)
  }
};
