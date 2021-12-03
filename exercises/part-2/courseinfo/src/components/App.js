import Course from "./Course";
import dataCourses from "./../data";
const App = () => (
  <div>
    {dataCourses.map((course) => (
      <Course course={course} />
    ))}
  </div>
);

export default App;
