import './customizeInput.scss';

export const CustomInput = ({
  value,
  name,
  onChange = () => {},
  readOnly = false,
  placeholder = '',
  type = 'text',
  onBlur = () => {},
}) => {
  const handleBlur = (value) => {
    if (name.toLowerCase().includes('phone')) {
      onBlur(value.trim());
    }
  };

  return (
    <div className="relative mb-4 cu-input">
      <input
        className={`${readOnly && 'readOnly'}`}
        name={name}
        type={type}
        autoComplete="off"
        value={value}
        placeholder={placeholder}
        onBlur={(e) => {
          handleBlur(e.target.value);
        }}
        onChange={(e) => {
          onChange(e);
        }}
      />
      {/* {note && (
        <div className="note">
          <span>{note.value}</span>
          <span>{format(note.date, 'dd/MM/yyyy')}</span>
        </div>
      )} */}
    </div>
  );
};

// const getLastChangeTime = (field, changes) => {
//   if (!Array.isArray(changes) || changes.length === 0) return null;
//   const fieldChanges = [...changes]
//     .reverse()
//     .filter((change) => change.field == field);

//   if (fieldChanges.length < 1) return null;
//   fieldChanges.sort((a, b) => new Date(b.changedAt) - new Date(a.changedAt));
//   return { value: fieldChanges[0].oldValue, date: fieldChanges[0].changedAt };
// };
