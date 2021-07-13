import React, { useEffect, useState } from "react";
import Icon from "@material-ui/core/Icon";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from "@material-ui/core/Tooltip";
import { useDispatch, useSelector } from "react-redux";

import actions from "../../actions";
import { Filter, FilterLabel } from "./style";

const options = ["All", "Pending", "Completed", "Archived"];
const action = {
  All: "FILTER_ALL",
  Pending: "FILTER_PENDING",
  Completed: "FILTER_COMPLETED",
  Archived: "FILTER_ARCHIVED",
};

const ITEM_HEIGHT = 48;

const FilterMenu = () => {
  const todos = useSelector((state) => state.todos.data);
  const filteredData = useSelector((state) => state.filters);
  const actionType = useSelector((state) => state.filters.actionType);
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterValue, setFilterValue] = useState("Pending");
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (type) => {
    setAnchorEl(null);
    if (type) {
      setFilterValue(type);
      dispatch({
        type: action[type],
        payload: todos,
      });
    }
  };

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
  };

  useEffect(() => {
    const value = getKeyByValue(action, actionType);
    if (value && options.indexOf(value) !== -1) {
      dispatch({
        type: actionType || actions.FILTER_PENDING,
        payload: todos,
      });
      setFilterValue(value);
    } else if (actionType === undefined || actionType === null) {
      dispatch({
        type: actions.FILTER_PENDING,
        payload: todos,
      });
      setFilterValue("Pending");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, dispatch]);

  useEffect(() => {
    if (actionType === actions.SEARCH) {
      dispatch({
        type: actions.SEARCH,
        payload: {
          data: todos,
          text: filteredData.text
        },
      });
      setFilterValue("All");
    }
  }, [actionType]);

  return (
    <Filter>
      <FilterLabel>{filterValue}</FilterLabel>
      <Tooltip title="Filter List">
        <Icon
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          filter_list
        </Icon>
      </Tooltip>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={(e) => handleClose("")}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === filterValue}
            onClick={(e) => handleClose(option)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Filter>
  );
};

export default React.memo(FilterMenu);
