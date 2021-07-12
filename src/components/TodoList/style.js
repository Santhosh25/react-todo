import styled, { css } from "styled-components";
import Paper from "@material-ui/core/Paper";
import Pagination from "@material-ui/lab/Pagination";

import { ReactComponent as nodata } from "../../assets/icon/noData.svg";
import { ReactComponent as todo } from "../../assets/icon/todo.svg";
import { ReactComponent as addTasks } from "../../assets/icon/addTasks.svg";
import { ReactComponent as completedTasks } from "../../assets/icon/completedTasks.svg";
import { ReactComponent as empty } from "../../assets/icon/empty.svg";

export const NoData = styled(nodata)`
  width: 200px;
  height: auto;
`;

export const NoTodo = styled(todo)`
  width: 200px;
  height: auto;
`;

export const NoTask = styled(addTasks)`
  width: 200px;
  height: auto;
`;

export const NoDataWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 50vh;
  color: #fff;
`;

export const NoCompletedTask = styled(completedTasks)`
  width: 200px;
  height: auto;
`;

export const Empty = styled(empty)`
  width: 200px;
  height: auto;
`;

export const PaperWrapper = styled(Paper)`
  display: flex;
  padding: 10px 20px;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 5px;

  :hover div {
    display: inline-flex;
  }
`;
export const IconWrapper = styled.div`
  display: none;
  align-self: center;
  cursor: pointer;

  & span {
    margin: 0 5px;
  }
`;

export const LabelWrapper = styled.span`
  ${(props) =>
    props.completed &&
    css`
      text-decoration: line-through;
    `}
`;

export const PaginationWrapper = styled(Pagination)`
  display: flex;
  justify-content: center;
  align-self: center;
  & button {
    color: #ffffff;
  }
`;