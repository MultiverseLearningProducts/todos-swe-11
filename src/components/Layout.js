import { Fragment } from "react";

export default function Layout(props) {
  return (
    <Fragment>
      <header>
        <h1>Todos</h1>
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
}
