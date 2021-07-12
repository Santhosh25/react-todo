import React, { useEffect, useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useDispatch, useSelector } from "react-redux";

import actions from "../../actions";
import {
  ButtonWrapper,
  ModalContent,
  ModalWrapper,
  TextFieldWrapper,
} from "./style";

export default function EditTodo({ open, data, onClose }) {
  const [value, setValue] = useState("");
  const todos = useSelector((state) => state.todos.data);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: actions.UPDATED,
      payload: {
        data: todos,
        text: value,
        id: data.id,
      },
    });
    setValue("");
    onClose();
  };

  useEffect(() => {
    setValue(data.text);
  }, [data]);

  return (
    <ModalWrapper
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={(e) => {
        onClose();
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <ModalContent>
          <TextFieldWrapper
            required
            id="standard-required"
            label="Required"
            autoComplete="false"
            value={value}
            error={!value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <ButtonWrapper
            variant="contained"
            color="primary"
            onClick={handleClick}
            disabled={!value}
          >
            Update
          </ButtonWrapper>
        </ModalContent>
      </Fade>
    </ModalWrapper>
  );
}
