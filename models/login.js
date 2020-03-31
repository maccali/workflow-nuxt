import axios from 'axios'

export default {
  async teste () {
    const { data } = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    return { data }
  }
}
