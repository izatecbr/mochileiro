
export default class PexelsAPI {

  http

  constructor(http) {
    this.http = http
  }

  fetchImages = (query, per_page = 4, size='small') => {
    return this.http(`/search`, {
      method: 'GET',
      params: {
        query,
        per_page,
        size
      },
    })
  }

}