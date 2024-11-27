import clsx from "clsx";

export const mergeClasses = (
  ...classes: (string | undefined | null | boolean)[]
) => {
  return clsx(...classes);
};
