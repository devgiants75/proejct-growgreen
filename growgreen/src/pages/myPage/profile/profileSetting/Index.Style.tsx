import styled from 'styled-components';

export const BoxContainer = styled.div`
  max-width: 420rem;
  margin-left: 150rem;
  margin-top: 80rem;

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

export const Title = styled.h3`
  font-size: 32rem;
  color: var(--gray110);
  font-weight: 700;
  text-align: center;
  margin-bottom: 30rem;
`;

export const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelWrapper = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  mb: 16rem;
`;

export const AvatarWrapper = styled.div`
  cursor: pointer;
  mb: 20rem;
`;

export const Text = styled.div`
  size: '12px';
  font-color: var(--gray90);
  mb: '40rem';
`;

export const Button1 = styled.button`
  display: flex,
  align-items: 'center',
  font-size: 16rem;
  width: 90rem;
  height: 48rem;
  background-color: var(--blue80);
  border-radius: 8rem;
  color: #fff;
  font-weight: 600;
  mt: '12rem';
`;
export const Button2 = styled.button`
  display: flex,
  align-items: 'center',
  font-size: 16rem;
  width: 90rem;
  height: 48rem;
  background-color: var(--blue80);
  border-radius: 8rem;
  color: #fff;
  font-weight: 600;
  margin-top: '50px';
`;

export const Message = styled.h4`
  font-size: 32rem;
  color: var(--gray110);
  font-weight: 700;
  text-align: center;
`;
