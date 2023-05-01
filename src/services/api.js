import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = `34506200-683bb96ed138c06f38447d715`;
const params = {
  page: 1,
  per_page: 12,
  key: `${API_KEY}`,
  image_type: `photo`,
  orientation: `horizontal`,
};

export const fetchImages = async value => {
  const response = await axios.get(`?q=${value}`, { params });
  return response.data;
};
