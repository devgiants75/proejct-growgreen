import styled from 'styled-components';

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600rem;
  margin: 120rem auto;

  & label[data-shrink='true'] {
    color: var(--gray100);
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

export const Title = styled.h3`
  font-size: 32rem;
  color: var(--gray110);
  font-weight: 700;
  text-align: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: '100%';
`;

export const Button1 = styled.button`
  display: flex;
  align-items: center;
  font-size: 16rem;
  width: 90rem;
  height: 48rem;
  background-color: var(--green90);
  border-radius: 8rem;
  color: #fff;
  font-weight: 600;
`;
export const Button2 = styled.button`
  display: flex;
  align-items: center;
  font-size: 16rem;
  width: 90rem;
  height: 48rem;
  background-color: var(--green90);
  border-radius: 8rem;
  color: #fff;
  font-weight: 600;
`;

export const Message = styled.h4`
  font-size: 32rem;
  color: var(--gray110);
  font-weight: 700;
  text-align: center;
`;
