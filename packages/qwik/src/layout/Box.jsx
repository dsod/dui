import { Box as PandaBox } from "../styled-system/jsx";

import { Fragment, component$, h } from "@builder.io/qwik";

export const Box = component$((props) => {
  return <PandaBox {...props}></PandaBox>;
});

export default Box;
