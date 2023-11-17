import './AddFilm.css';
import React, { useState } from 'react';
import ListFilm from '../ListFilm/ListFilm';


interface Props {
  filmName: string;
}

const AddFilmF: React.FC<Props> = ({ filmName }) => {
  const [addFilm, setAddFilm] = useState<{ id: number; name: string }[]>([]);
  const [valueFilm, setValueFilm] = useState('');

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueFilm(event.target.value);
  };

  const buttonAddFilmClick = () => {
    if (valueFilm !== '') {
      setAddFilm((prev) => [...prev, { id: Math.random(), name: valueFilm }]);
      setValueFilm('');
    }
  };

  const editFilm = (id: number, newValue: string) => {
    setAddFilm((prev) =>
      prev.map((film) => (film.id === id ? { ...film, name: newValue } : film))
    );
  };

  const deleteFilm = (id: number) => {
    setAddFilm((prev) => prev.filter((film) => film.id !== id));
  };

  return (
    <div className="newFilmAdd">
      <input
        className="inputForFilm"
        type="text"
        value={valueFilm}
        onChange={inputChange}
        name={filmName}
      />
      <button className="buttonAddFilm" onClick={buttonAddFilmClick}>
        Add
      </button>
      <h3>To watch list: </h3>
      {addFilm.map((film) => (
        <ListFilm
          key={film.id}
          film={film}
          editFilm={(newValue) => editFilm(film.id, newValue)}
          deleteFilm={() => deleteFilm(film.id)}
        />
      ))}
    </div>
  );
};

export default AddFilmF;
