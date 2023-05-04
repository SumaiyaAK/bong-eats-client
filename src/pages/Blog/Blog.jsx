import React from 'react';
import { Container } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <Container className='mx-auto m-8 p-4'>
            <div className='mt-8'>
                <div className=''>
                    <h2 className='question'>1.Tell us the differences between uncontrolled and controlled components </h2>
                    <h3 className='Answers'>
                        Ans: Uncontrolled components are self-contained modules that manage their own state and behavior independently of any external control. on the other hand, Controlled components relys on external control and coordination to manage their state and behavior. Uncontrolled components are simpler and more easy than controlled components. Controlled components are typically used in user interfaces and other complex systems, while uncontrolled components are often used for basic data structures and libraries for handling common tasks.
                    </h3>

                </div>
                <div className=''>
                    <h2 className='question'>2.How to validate React props using PropTypes?</h2>
                    <h3 className='Answers' >Ans:
                        To validate React props we need to use PropTypes, then import the PropTypes package, declare the propTypes property in the component section, and we need to define the prop types to validate. Then, we need to pass props to the component and validate them against the defined PropTypes. PropTypes offers a wide range of validation options, including required props, object shapes, and custom validators.
                    </h3>

                </div>
                <div className=''>
                    <h2 className='question '>3.Tell us the difference between nodejs and express js.</h2>
                    <h3 className='Answers'>Ans:
                        Node.js is a Chrome's V8 JavaScript engine. It allows developers to use JavaScript to write server-side applications that can run outside of a web browser. On the other hand, Express.js is a web application framework for Node.js that provides a  set of features for building web and mobile applications.

                        While Node.js provides the runtime environment and the basic building blocks for server-side JavaScript development, Express.js provides additional abstractions and utilities to build web applications easier. Express.js provides features like routing, middleware support, and templating engines that simplify the development of web applications.

                        In summary, Node.js provides the runtime environment for server-side JavaScript development, while Express.js is a web application framework that simplifies the development of web applications on top of Node.js.
                    </h3>

                </div>
                <div className=''>
                    <h2 className='question'>4.What is a custom hook, and why will you create a custom hook?</h2>
                    <h3 className='Answers'>Ans:
                        A custom hook is a function that uses React's built-in hooks such as useState, useEffect, useContext, etc. to provide a specific functionality  that can be reused for multiple components in a React application.

                        Developers create custom hooks to record complex logic and provide a reusable interface for using that logic across different parts of their application.

                        For example, a developer might create a custom hook to fetch data from an API and handle loading and error states. They could then use that custom hook in multiple components that need to fetch data from the same API.

                        Custom hooks can also improve code readability and reduce the amount of code needed to achieve a particular functionality, making the code more concise and easier to understand.
                    </h3>

                </div>


            </div>
        </Container>
    );
};

export default Blog;