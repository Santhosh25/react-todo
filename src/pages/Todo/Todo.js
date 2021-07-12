import React from "react";

import Search from "../../components/Search/Search";
import FilterMenu from "../../components/FilterMenu";
import TodoList from "../../components/TodoList";
import Add from "../../components/Add";
import { AddTodo, AppWrapper, Header, ListWrapper, Section } from "./style";

function Todo() {
  return (
    <AppWrapper>
      <Header>
        <Search />
      </Header>

      <Section>
        <FilterMenu />
        <ListWrapper>
          <TodoList />
        </ListWrapper>
      </Section>
      <AddTodo>
        <Add />
      </AddTodo>
    </AppWrapper>
  );
}

export default Todo;
