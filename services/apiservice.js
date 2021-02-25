export const getCountries = (url) => {
  const results = fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      Accept: "application/json",
     
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
  return results;
};
