import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "26d652be906f93e37221069ef6ccbc1b",
        language: "ko-KR",
    }
})

export default instance