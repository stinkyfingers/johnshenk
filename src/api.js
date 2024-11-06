export const config = () => {
  return fetch('https://guitarimages.s3.us-west-1.amazonaws.com/config.json')
    .then((res) => res.json());
};