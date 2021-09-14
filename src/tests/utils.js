import { checkPropTypes } from "prop-types";

export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);

export const checkProps = (component, propDefinition) => {
  const propError = checkPropTypes(
    component.propTypes,
    propDefinition,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
