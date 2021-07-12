import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Modal from "@material-ui/core/Modal";

export const ModalWrapper = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  display: flex;
  background-color: #fff;
  width: 50%;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const TextFieldWrapper = styled(TextField)`
  width: 100%;
`;

export const ButtonWrapper = styled(Button)`
  width: 200px;
  margin-top: 15px !important;
`;