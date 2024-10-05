import React from 'react';
import './Courses.css'; 

const Courses = () => {
  return (
    <section id="courses">
      <div className="courses-container">
        <h2>Our Courses</h2>
        <div className="courses-list">
          <div className="course-item" id="html-css">
            <h3>HTML & CSS Basics</h3>
            <p>Learn the fundamentals of web development with HTML and CSS, the building blocks of the web. By the end of this course, you'll be able to create your own static websites.</p>
          </div>
          <div className="course-item" id="javascript">
            <h3>JavaScript Essentials</h3>
            <p>Dive into JavaScript and learn how to add dynamic behavior to your websites. This course will teach you the core concepts of programming with JavaScript.</p>
          </div>
          <div className="course-item" id="responsive-design">
            <h3>Responsive Web Design</h3>
            <p>Create responsive websites that look great on any device. This course will show you how to use media queries and flexible layouts to design websites that work on all screen sizes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
