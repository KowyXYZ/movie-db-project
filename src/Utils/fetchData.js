export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODZiMDVmZmI4MmY5NWZiM2I3NjA3MmYxNjFlNTkzMSIsInN1YiI6IjY1NDY4Y2MyZDU1YzNkMDExY2NmNjMyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ug-vie6N0A5eCyvB7ZhMdYO0Glr034EhH81bpCmAC6Y'
    }
  };
  
export const fetchData = async(url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data

}
