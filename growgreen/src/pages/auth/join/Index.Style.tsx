import { styled } from 'styled-components';

export const BoxContainer = styled.form`
  max-width: 420rem;
  margin: 120rem auto;

  & label[data-shrink='true'] {
    color: var(--gray100);
    margin-top: 4rem;
    margin-bottom: 2rem;
  }

  & input {
    border: 1px solid var(--gray50);
    height: 48rem;
    font-size: 16rem;
    padding: 8rem 12rem;
    border-radius: 6rem;
  }

  & input:focus {
    border-color: var(--gray80);
  }
`;

export const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 24rem;
`;

export const FormBox = styled.form`
  mt: 1;
`;

export const Title = styled.h3`
  font-size: 32rem;
  color: var(--gray110);
  font-weight: 700;
  text-align: center;
  margin-bottom: 24rem;
`;

export const Button = styled.button`
  margin-top: 20rem;
  padding: 8rem 12rem;
  font-size: 16rem;
  height: 48rem;
  background-color: var(--blue80);
  border-radius: 8rem;
  color: #fff;
  font-weight: 600;
  width: 420rem;
`;
