const getURL = (address, port, path) => {
  const url = `${address}:${port}${path}`;
  return url;
};

export default getURL;
