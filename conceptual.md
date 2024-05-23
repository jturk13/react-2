### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

React Router is essential for building scalable, maintainable, and user-friendly single-page applications in React by providing a robust framework for managing routes and navigation.

- What is a single page application?

A single-page application (SPA) is a type of web application that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of loading entire new pages. This approach provides a more fluid user experience similar to a desktop application.

- What are some differences between client side and server side routing?

Client-side routing offers a more dynamic and interactive user experience but comes with additional complexity and initial load time considerations. Server-side routing is simpler and more SEO-friendly but can result in slower navigation due to full page reloads. The choice between the two depends on the specific requirements and goals of the web application.

- What are two ways of handling redirects with React Router? When would you use each?

Summary
Programmatic Redirects (useNavigate):

Use when you need to redirect based on dynamic conditions within your component logic.
Ideal for handling redirects after events like form submissions, API responses, or user actions.

Declarative Redirects (<Navigate>):

Use for static or straightforward redirections defined directly in your JSX.
Ideal for route protection, permanent redirects, and simple conditional redirects.

Choosing between these methods depends on the specific use case and whether the redirect logic is dynamic and event-driven or static and straightforward.

- What are two different ways to handle page-not-found user experiences using React Router? 

Catch-All Route:

Simple and straightforward.
Specifically targets unmatched routes for 404 handling.

Error Boundaries:

Provides a robust way to handle various errors, including rendering errors.		
Can be used in conjunction with a catch-all route to enhance error handling and user experience.

Both methods can be used in tandem to ensure comprehensive error handling in your React application.



- How do you grab URL parameters from within a component using React Router?

Using the useParams hook in React Router allows you to easily access URL parameters within your components, enabling dynamic content rendering based on the URL. This is particularly useful for tasks like fetching data, conditional rendering, and navigation logic that depends on URL parameters.

- What is context in React? When would you use it?

Context is a feature that allows you to share values or state across your component tree without having to pass props down manually at every level. This is especially useful for global data that many components need access to, such as the current authenticated user, theme settings, or application settings.

- Describe some differences between class-based components and function components in React.

Class-Based Components:

Use ES6 class syntax.	
Manage state with this.state and this.setState.		
Use lifecycle methods for side effects.		
Can be more verbose and complex.		

Function Components:

Use plain JavaScript functions.		
Manage state with useState hook.		
Use useEffect hook for side effects.		
Tend to be more concise and easier to read.		
Benefit from hooks for reusable logic and performance optimization.		

With the introduction of hooks in React 16.8, function components have become the preferred way to create components in modern React development due to their simplicity and flexibility.

- What are some of the problems that hooks were designed to solve?

React hooks were designed to address several challenges:

Reusing stateful logic: Custom hooks make it easy to share logic without HOCs or render props.

Component complexity: Simplifies component structure by using functional components.

Lifecycle method issues: Consolidates side effect logic into useEffect.

Complexity with HOCs and render props: Reduces the need for complex patterns, leading to cleaner and more maintainable code.

Hooks have transformed how developers write React components, making them more functional, concise, and easier to manage.