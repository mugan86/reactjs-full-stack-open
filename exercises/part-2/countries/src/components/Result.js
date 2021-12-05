import Item from "./Item";
import Items from "./Items";
const Result = ({ list, search, onClick }) => {
  if (list.length === 1) {
    const country = list[0];
    return <Item country={country} />;
  } else if (list.length > 1 && list.length <= 10) {
    return <Items list={list} onClick={onClick} />;
  }
  return search !== "" && list.length > 10 ? (
    <div>Too many matches, specify other filter.</div>
  ) : (
    <div></div>
  );
};

export default Result;
