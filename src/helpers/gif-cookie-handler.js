export const gifCookieHandler = (gif) => {
  let cookieData = JSON.parse(localStorage.getItem('locked-gifs'));
  if (!cookieData) {
    return localStorage.setItem('locked-gifs', JSON.stringify([gif]));
  }
  localStorage.removeItem('locked-gifs');
  const matchingIndex = cookieData.findIndex(item => item.id === gif.id)
  if (matchingIndex === -1) {
    cookieData.push(gif);
  } else {
    cookieData.splice(matchingIndex, 1);
  }
  return localStorage.setItem('locked-gifs', JSON.stringify(cookieData));
};
