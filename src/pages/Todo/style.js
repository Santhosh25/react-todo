import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: center;
  align-items: center;
  margin: 0 auto;
  min-height: 100vh;
`;

export const Header = styled.header`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 50px;
  position: sticky;
  left: 0;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.3);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;

  @media (min-width: 600px) {
    justify-content: center;
  }
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
    width: 720px;
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

  @media (min-width: 1024px) {
    width: 720px;
  }
`;

export const Logo = styled.span`
  font-size: 24px;
  position: absolute;
  left: 15px;
  color: #fff;
  font-weight: 700;
`;
