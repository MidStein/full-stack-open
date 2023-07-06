const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <p>total of {sum} exercises</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map((part) => ( <Part key={part.id} part={part} /> ))}
  </>

const Course = ({ courses }) => {
  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map((course) => {
        const total = course.parts.reduce((sum, part) => 
          (sum + part.exercises), 0);

        return (
          <div key={course.id}>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total sum={total} />
          </div>
        );
      })}
    </>
  );
}

export default Course;

