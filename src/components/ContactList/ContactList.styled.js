import styled from 'styled-components';
// export const List = styled.ul`
//   display: flex;
//   flex-direction: column;
// `;

export const ListItem = styled.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const ListItemText = styled.p`
  margin-right: 10px;
  font-size: 20px;
`;

export const ListItemBtn = styled.button`
  border-radius: 5px;
  border: none;
  :active {
    background-color: blue;
  }
`;
