import styled from 'styled-components';

export const Container = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  position: absolute;
    top: 50%;
    left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  width: 350px;
`;
export const FieldWrapper = styled.div`
  margin-bottom: 30px;
  position: relative;
  width: 100%;
`;
export const Label = styled.label`
  color: #999;
  font-size: 12px;
  position: absolute;
    top: 8px;
    left: 10px;
`;
export const Field = styled.input`
  background: #fafafa;
  border: none;
  border-radius: 3px;
  box-shadow: 0 5px 20px inset rgba(0, 0, 0, .02);
  display: flex;
  outline: none;
  padding: 28px 10px 8px 10px;
  transition: background .1s ease;
  width: 100%;

  &:focus {
    background: #eaeaea;
  }
`;
export const Submit = styled.input`
  align-items: center;
  background: #529F8D;
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, .16);
  color: #fff;
  cursor: pointer;
  display: flex;
  height: 50px;
  margin-top: 10px;
  outline: none;
  padding: 0 40px;
`;
