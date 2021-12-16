import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className="text-center py-5">
      <p>Sorry. Page not found!!!</p>
      <h2 className="fw-bold">404 Error</h2>
    </Container>
  );
};

export default NotFound;