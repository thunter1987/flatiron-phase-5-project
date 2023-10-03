# Project Requirements

## Minimum Requirements:

- Use a Flask/SQLAlchemy API backend with a React frontend.

- Have at least 4 models on the backend, that include the following:

- At least 1 many-to-many relationship.

- Full CRUD actions for at least one resource, following REST conventions.

- User can interact with all models, directly or indirectly (no unused models).

- Have at least 3 different client-side routes using React Router. 

  - Be sure to include a nav bar or other UI element that allows users to navigate between routes.

- Implement password hashing and authentication.

- Validations implemented on frontend and backend

  - Use SQLAlchemy validations to verify and protect data on the backend.

  - Use forms and validation through Formik on all input.

    - At least one data type validation.

    - At least one string/number format validation.

- Connect the client and server using fetch().

### Optional Requirements 

- Implement something new not taught in the curriculum. (Check in with your instructor to ensure the scope of your idea is appropriate.)

- Implement useContext or Redux.

- Fully deploy and host your project.

#### Note: a user should only be able to edit and delete user-specific resources if they are

- logged in and the creator of that resource
  - with the exception of high permission users such as admin roles (if implemented)
  