const Search = ({inputValue, onChange}) => {
    return (
        <div>
            <span>Find Countries: </span>
            <input value={inputValue} onChange={onChange} />
        </div>
        
    )
}

export default Search;