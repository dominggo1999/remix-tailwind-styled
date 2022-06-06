import React from 'react';
import { Button, Wrapper } from '~/components/Wrapper';

const Index = () => {
  return (
    <Wrapper>
      <h1>
        Remix Tailwind Styled Components
      </h1>
      <Button
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Repo
      </Button>
    </Wrapper>
  );
};

export default Index;
