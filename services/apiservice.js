export const getCountries=(url)=>{
    const results=fetch(url,{
        method:"GET",
        mode:"cors",
        cache:"no-cache",
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>data);
    return results
}