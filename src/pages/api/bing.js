import axios from 'axios';

export default async function handler(req, res) {
  try {
    const background = await axios.get('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR');
    const bgImage = `https://www.bing.com${background.data.images[0].url}`;
    res.status(200).json({ background: bgImage })
  }catch(e){
    console.error(e);
  }
}