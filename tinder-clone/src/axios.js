import axios from 'axios'


const instance=axios.create({
  baseURL:" https://sree-tinder-backend.herokuapp.com/",
})

export default instance;