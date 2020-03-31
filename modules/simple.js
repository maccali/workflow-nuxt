import axios from 'axios';

const baseUrl = 'https://api.nasa.gov'

export default function SimpleModule(moduleOptions) {
  http: async () => {
    console.log(`${baseUrl}${rotaApi}`);
    await axios({
      method: metodo,
      url: `${baseUrl}${rotaApi}`,
      data: objeto,
    })
      .then(function (response) {
        return response;
      }).catch(error => {
        return error;
      }).then(response => {
        return response;
      });
  }
}
