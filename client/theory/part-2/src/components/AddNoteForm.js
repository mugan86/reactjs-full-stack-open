const AddNoteForm = ({add, newItem, onChange}) => (
    <form onSubmit={add}>
        <input value={newItem} onChange={onChange} />
        <button type="submit">Save</button>
    </form>
);

export default AddNoteForm;