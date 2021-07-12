import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: center;
  align-items: center;
  margin: 0 auto;
  min-height: 100vh;
  padding-top: 10px;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const Header = styled.header`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  position: sticky;
  left: 0;
  top: 10px;
`;

export const AddTodo = styled.div`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 22px;
  width: 100%;
  padding: 0 20px;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const ListWrapper = styled.div`
  margin: 20px 0;
  width: 100%;
`;

export const Section = styled.section`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.3);
  padding: 20px;
  min-height: 90vh;
`;