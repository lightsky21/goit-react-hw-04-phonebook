import styled from 'styled-components';

// export const FormLabelText = styled.span`
//   display: block;
//   font-size: 20px;
//   margin-bottom: 10px;
// `;
export const Form = styled.form`
  outline: black solid 2px;
  padding: 20px;
  width: 400px;
  margin-bottom: 20px;
`;
export const FormField = styled.label`
  display: block;
  margin-bottom: 25px;
`;
export const FormBtn = styled.button`
  border-radius: 5px;
  border: none;
  padding: 5px;
  font-size: 13px;
  :active {
    background-color: light-blue;
  }
`;
