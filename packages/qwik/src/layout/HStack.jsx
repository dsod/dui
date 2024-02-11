import { HStack as PandaHStack } from "../styled-system/jsx";

import { Fragment, component$, h } from "@builder.io/qwik";

export const HStack = component$((props) => {
  return <PandaHStack {...props}></PandaHStack>;
});

export default HStack;
