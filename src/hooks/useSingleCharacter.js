import axios from 'axios';

const singleCharacter = async (id, state) => {
  const request = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  state(request.data);
  console.log(request.data);
}

export default singleCharacter;