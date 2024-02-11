import { Wrap as PandaWrap } from "../styled-system/jsx";

import { Fragment, component$, h } from "@builder.io/qwik";

export const Wrap = component$((props) => {
  return <PandaWrap {...props}></PandaWrap>;
});

export default Wrap;
