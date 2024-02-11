import { Stack as PandaStack } from "../styled-system/jsx";

import { Fragment, component$, h } from "@builder.io/qwik";

export const Stack = component$((props) => {
  return <PandaStack {...props}></PandaStack>;
});

export default Stack;
