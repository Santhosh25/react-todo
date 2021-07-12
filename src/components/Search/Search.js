import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
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

const Search = () => {
  const data = useSelector((state) => state.todos.data);
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Paper component="form" className={classes.root}>
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
    </Paper>
  );
};

export default Search;
