import { useSelector } from 'react-redux';
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';
import Continents from '../compopnents/Continents';

function Home() {
  const { loading, continentFail } = useSelector((state) => state.continents);
  if (loading) {
    return (
      <div>
        <h2>Loading</h2>
      </div>
    );
  }
  if (continentFail) {
    return (
      <div>
        <h2>
          <BsEmojiSmileUpsideDown />
          Ups....something went wrong!
          <br />
          Please try again later
        </h2>
      </div>
    );
  }
  return (
    <>
      <Continents />
    </>
  );
}

export default Home;
