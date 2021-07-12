import React from "react";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { useDispatch, useSelector } from "react-redux";

import actions from "../../actions";
import { PaperWrapper, useStyles } from "./style";

const Search = () => {
  const data = useSelector((state) => state.todos.data);
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <PaperWrapper component="form" className={classes.root}>
      <InputBase
        onChange={(e) => {
          dispatch({
            type: actions.SEARCH,
            payload: {
              data: data,
              text: e.target.value,
            },
          });
        }}
        className={classes.input}
        placeholder="Search Task"
        inputProps={{ "aria-label": "search task" }}
      />
      <IconButton
        type="button"
        className={classes.iconButton}
        aria-label="search"
      >
        <Icon>search</Icon>
      </IconButton>
    </PaperWrapper>
  );
};

export default Search;
