import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Tooltip from "@material-ui/core/Tooltip";

import actions from "../../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 15px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    borderRadius: "22px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const Add = () => {
  const [value, setValue] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value) {
      dispatch({
        type: actions.ADD,
        payload: {
          id: uuidv4(),
          text: value,
          isDone: false,
          isArchive: false,
        },
      });
    }

    setValue("");
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Add new task"
          inputProps={{ "aria-label": "add new task" }}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <Tooltip title="Add task">
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="add"
          >
            <Icon>add_task</Icon>
          </IconButton>
        </Tooltip>
      </Paper>
    </form>
  );
};

export default React.memo(Add);
