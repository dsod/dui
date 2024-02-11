import { Container as PandaContainer } from "../styled-system/jsx";

import { Fragment, component$, h } from "@builder.io/qwik";

export const Container = component$((props) => {
  return <PandaContainer {...props}></PandaContainer>;
});

export default Container;
