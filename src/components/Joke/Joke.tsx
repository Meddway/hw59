import React, {useEffect, useState} from 'react';

const url = 'https://api.chucknorris.io/jokes/random';

interface Props {
  value: string;
}

const Joke: React.FC<Props> = () => {
  const [joke, setJoke] = useState<string>('');

  const fetchJoke = async () => {
    const response = await fetch(url);

    if (response.ok) {
      const jokeNorris: Props = await response.json();
      setJoke(jokeNorris.value);
    }
  };

  useEffect(() => {
    void fetchJoke();
  }, []);

  return (
    <div>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Запрос новой шутки.</button>
    </div>
  );
};

export default Joke;
