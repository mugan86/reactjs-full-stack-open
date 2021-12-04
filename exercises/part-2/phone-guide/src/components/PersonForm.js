const PersonForm = ({
  onSubmit,
  valueName,
  changeName,
  valuePhone,
  changePhone,
}) => (
  <form onSubmit={onSubmit}>
    <div>
      Name: <input value={valueName} onChange={changeName} />
    </div>
    <div>
      Phone: <input value={valuePhone} onChange={changePhone} />
    </div>
    <div>
      <button type="submit">Add [+]</button>
    </div>
  </form>
);

export default PersonForm;
