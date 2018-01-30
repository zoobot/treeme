import axios from 'axios'

const ROOT_URL = '/foo'
// node-fetch

export const FETCH_FOO = 'FETCH_FOO'


// Axios
const fetchFoo = async() => {
  const url = `$ROOT_URL`
  const request = axios.get(url)
  console.log('request',request)
  const res = await t.throws(request);
  console.log(res.response.data)

  // const respon = await fetch('/foo')
  // console.log(respon)

  return {
    type: FETCH_FOO,
    payload: request
  }
}
  // fetch("/foo")
    // .then(res => res.json()
    //   // .then(data => console.log("data", JSON.stringify(data, null, 4)))
    //   .then(data => console.log("data", data))
    // )



export default fetchFoo