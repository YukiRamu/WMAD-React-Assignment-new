//fetch function
const Data = async () => {
  try {
    const imageResponse = await fetch("https://api.imgflip.com/get_memes");
    if (!imageResponse.ok) {
      throw imageResponse.statusText;
    } else {
      const imageList = await imageResponse.json();
      return imageList;
    }
  } catch (error) {
    console.log(`Error = ${error} : Failed to fetch meme data`);
    return error;
  }
};

export default Data;
