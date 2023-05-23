import useTitle from "../../hooks/useTitle";

const BlogPage = () => {
  useTitle("Blog | Toy Car Heaven");
  return (
    <div className="container mx-auto">
      <h1 className="mb-4 text-2xl font-bold">
        1. Tell us the differences between uncontrolled and controlled
        components?
      </h1>
      <p className="mb-4 text-xl font-semibold">
        Both the access token and refresh token are issued by an authentication
        server or service and are used to verify the user's identity and
        permissions. They are typically sent in the headers of API requests to
        authenticate and authorize the user. On the client-side, it is important
        to store the access token securely to prevent unauthorized access. It is
        commonly stored in memory or as an HTTP-only cookie, which helps protect
        against cross-site scripting XSS attacks. Refresh tokens, on the other
        hand, should be stored securely, such as in an encrypted form or within
        a secure storage mechanism like a secure cookie or local storage.
      </p>
      <h1 className="mb-4 text-2xl font-bold">
        2. Compare SQL and NoSQL databases?
      </h1>
      <p className="mb-4 text-xl font-semibold">
        The choice between SQL and NoSQL databases depends on the specific
        requirements of the application. SQL databases are well-suited for
        structured data and complex relationships, whereas NoSQL databases excel
        in handling large volumes of unstructured or rapidly changing data,
        providing scalability, and enabling fast query performance.
      </p>
      <h1 className="mb-4 text-2xl font-bold">
        3. What is express js? What is Nest JS?
      </h1>
      <p className="mb-4 text-xl font-semibold">
        Express.js is a popular and widely used web application framework for
        Node.js. It provides a minimalist and flexible approach to building web
        applications and APIs. Express.js simplifies the process of handling
        HTTP requests, defining routes, and managing middleware functions. It is
        known for its simplicity, lightweight nature, and extensive ecosystem of
        middleware and plugins. NestJS, on the other hand, is a progressive
        Node.js framework for building efficient, scalable, and maintainable
        server-side applications. It is built with TypeScript and embraces
        modern JavaScript features. NestJS is heavily influenced by Angular's
        architecture and concepts, such as modules, controllers, services, and
        decorators. It aims to provide a solid structure for building
        server-side applications by promoting modularity, dependency injection,
        and the use of decorators for defining routes and other metadata.
      </p>
      <h1 className="mb-4 text-2xl font-bold">
        4. What is MongoDB aggregate and how does it work?
      </h1>
      <p className="mb-4 text-xl font-semibold">
        MongoDB Aggregate is a powerful feature of the MongoDB database that
        allows for advanced data processing and aggregation operations. It
        provides a way to perform complex operations on data stored in MongoDB
        collections and returns the results in a structured format.
      </p>
    </div>
  );
};

export default BlogPage;
