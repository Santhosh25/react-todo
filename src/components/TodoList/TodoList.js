import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Icon from "@material-ui/core/Icon";
import { useDispatch } from "react-redux";
import Tooltip from "@material-ui/core/Tooltip";

import actions from "../../actions";
import EditTodo from "../EditTodo";
import {
  Empty,
  IconWrapper,
  LabelWrapper,
  NoCompletedTask,
  NoData,
  NoDataWrapper,
  NoTask,
  NoTodo,
  PaperWrapper,
  PaginationWrapper,
} from "./style";

const TodoList = () => {
  const todos = useSelector((state) => state.filters.data);
  const actionType = useSelector((state) => state.filters.actionType);
  const dispatch = useDispatch();
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(0);
  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({});

  const handlePaginationChange = (event, value) => {
    setPage(value);
  };

  const handleChange = (val) => {
    dispatch({
      type: actions.TOGGLE,
      payload: val,
    });
  };

  const handleOpen = (value) => {
    setModalValue(value);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setNoOfPages(Math.ceil(todos.length / itemsPerPage));
    setPage(1);
  }, [todos]);

  if (todos.length === 0 && actionType === actions.FILTER_ALL) {
    return (
      <NoDataWrapper>
        <NoTodo />
        <h2>Nothing to show, add new task</h2>
      </NoDataWrapper>
    );
  }

  if (todos.length === 0 && actionType === actions.FILTER_ARCHIVED) {
    return (
      <NoDataWrapper>
        <NoData />
        <h2>No data available</h2>
      </NoDataWrapper>
    );
  }

  if (todos.length === 0 && actionType === actions.FILTER_COMPLETED) {
    return (
      <NoDataWrapper>
        <NoCompletedTask />
        <h2>No data available</h2>
      </NoDataWrapper>
    );
  }

  if (todos.length === 0 && actionType === actions.FILTER_PENDING) {
    return (
      <NoDataWrapper>
        <NoTask />
        <h2>Nothing to show, add new task</h2>
      </NoDataWrapper>
    );
  }

  if (todos.length === 0 && actionType === actions.SEARCH) {
    return (
      <NoDataWrapper>
        <Empty />
        <h2>No data</h2>
      </NoDataWrapper>
    );
  }

  return (
    <>
      {todos &&
        todos
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((val) => (
            <PaperWrapper key={val.id}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={val?.isDone}
                    onChange={(e) => handleChange(val)}
                    value="a"
                    name="radio-button"
                    inputProps={{ "aria-label": "A" }}
                  />
                }
                label={
                  <LabelWrapper completed={val.isDone}>
                    {val?.text}
                  </LabelWrapper>
                }
              />

              <IconWrapper>
                <Tooltip title="Edit">
                  <Icon onClick={(e) => handleOpen(val)}>edit</Icon>
                </Tooltip>
                <Tooltip title="Archive">
                  <Icon
                    onClick={(e) => {
                      dispatch({
                        type: actions.ARCHIVE,
                        payload: val,
                      });
                    }}
                  >
                    archive
                  </Icon>
                </Tooltip>
                <Tooltip title="Delete">
                  <Icon
                    onClick={(e) => {
                      dispatch({
                        type: actions.REMOVE,
                        payload: val,
                      });
                    }}
                  >
                    close
                  </Icon>
                </Tooltip>
              </IconWrapper>
            </PaperWrapper>
          ))}

      <div>
        {todos.length > 0 ? (
          <PaginationWrapper
            shape="rounded"
            count={noOfPages}
            page={page}
            defaultPage={1}
            onChange={handlePaginationChange}
          />
        ) : (
          ""
        )}
      </div>
      {open ? (
        <EditTodo open={open} data={modalValue} onClose={handleClose} />
      ) : (
        ""
      )}
    </>
  );
};

export default TodoList;
