import React, {useState} from 'react';
import './ListFilm.css';

interface Film {
  id: number;
  name: string;
}

interface Props {
  film: Film;
  editFilm: (newValue: string) => void;
  deleteFilm: () => void;
}
const MemoedListFilm: React.FC<Props> = React.memo(function ListFilm({film, editFilm, deleteFilm}) {
  const [forEdit, setForEdit] = useState(false);
  const [valueEdit, setValueEdit] = useState(film.name);

  const editClick = () => {
    setForEdit(true);
  };

  const refreshClick = () => {
    editFilm(valueEdit);
    setForEdit(false);
  };

  const cancelClick = () => {
    setForEdit(false);
    setValueEdit(film.name);
  };

  return (
    <div>
      {forEdit ? (
        <div>
          <input
            className="pListFilm"
            value={valueEdit}
            onChange={(e) => setValueEdit(e.target.value)}
          />
          <button className="btnRefresh" onClick={refreshClick}>Refresh</button>
          <button className="btnCancel" onClick={cancelClick}>Cancel</button>
        </div>
      ) : (
        <div>
          <input
            className="pListFilm"
            value={valueEdit}
            readOnly
          />
          <button className="btnEdit" onClick={editClick}>Edit</button>
          <button className="btnDelete" onClick={deleteFilm}>Delete</button>
        </div>
      )}
    </div>
  );
  }, (prevProps, nexProps) => {
  return prevProps.film === nexProps.film && prevProps.film === nexProps.film;
});

export default MemoedListFilm;