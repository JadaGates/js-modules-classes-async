const poemApi = "https://v1.jinrishici.com/all.json";

export const getPoetry = async function () {
  const result = fetch(poemApi, {
    method: "GET",
  })
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      const poemInfo = JSON.parse(text);
      const result = [poemInfo.origin, poemInfo.author, poemInfo.content];
      return result;
    })
    .catch((err) => console.log(err));
  return result;
};

export const getPoetryByPromise = function () {
  const promise = new Promise((resolve, reject) => {
    fetch(poemApi, {
      method: "GET",
    })
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        const poemInfo = JSON.parse(text);
        const result = [poemInfo.origin, poemInfo.author, poemInfo.content];
        resolve(result);
      })
      .catch((err) => reject(err));
  });
  return promise;
};
