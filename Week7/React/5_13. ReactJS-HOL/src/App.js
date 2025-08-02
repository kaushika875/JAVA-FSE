import React from 'react';
import './App.css';

// Data for Books
export const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 }
];

// Data for Blogs
export const blogs = [
  { id: 1, title: 'React Learning', author: 'Stephen Biz', body: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', author: 'Schewzdenier', body: 'You can install React from npm.' }
];

// Data for Courses
export const courses = [
  { id: 1, name: 'Angular', date: '4/5/2021' },
  { id: 2, name: 'React', date: '6/3/2021' }
];

// Book Details Component (Using Element Variable)
function BookDetails(props) {
  const bookList = (
    <ul>
      {props.books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );

  return (
    <div className="section st2">
      <h1>Book Details</h1>
      {bookList}
    </div>
  );
}

// Blog Details Component (Using Ternary Operator)
function BlogDetails(props) {
  return (
    <div className="section v1">
      <h1>Blog Details</h1>
      {props.blogs.length > 0 ? (
        props.blogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <h4>{blog.author}</h4>
            <p>{blog.body}</p>
          </div>
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
}

// Course Details Component (Using Logical AND &&)
function CourseDetails(props) {
  return (
    <div className="section mystyle1">
      <h1>Course Details</h1>
      {props.courses && props.courses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <h4>{course.date}</h4>
        </div>
      ))}
    </div>
  );
}

function App() {
  const showCourses = true;
  const showBooks = true;
  const showBlogs = true;

  return (
    <div className="container">
      {showBooks && <BookDetails books={books} />}
      {showBlogs ? <BlogDetails blogs={blogs} /> : <p>Blogs are hidden</p>}
      {showCourses && <CourseDetails courses={courses} />}
    </div>
  );
}

export default App;
