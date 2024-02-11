import { VStack as PandaVStack } from "../styled-system/jsx";

import { Fragment, component$, h } from "@builder.io/qwik";

export const VStack = component$((props) => {
  return <PandaVStack {...props}></PandaVStack>;
});

export default VStack;
