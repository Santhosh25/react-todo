import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    backgroundColor: "#f0f8ff69",
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

export const PaperWrapper = styled(Paper)`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 70%;
  @media (min-width: 1024px) {
    width: 720px;
  }
`;
