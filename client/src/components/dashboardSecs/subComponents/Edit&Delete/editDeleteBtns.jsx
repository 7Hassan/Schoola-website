import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import './editDeleteBtns.scss';

const EditDeleteBtns = ({ onEdit, onDelete, item }) => {
  return (
    <div className="card-actions">
      {onEdit && (
        <button className="btn edit" onClick={onEdit} title="تعديل">
          <FontAwesomeIcon icon={faPen} />
        </button>
      )}
      {onDelete && (
        <button className="btn delete" onClick={onDelete} title="حذف">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      )}
    </div>
  );
};

export default EditDeleteBtns;
