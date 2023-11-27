import Course from "./Course";

function Courses({ courses, removeCourse }) {
  return (
    <div className="courseMainDiv">
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div className="cardDiv">
        {courses.map((course) => {
          return (
            <Course
              {...course}
              key={course.id}
              removeOnecourse={removeCourse}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
