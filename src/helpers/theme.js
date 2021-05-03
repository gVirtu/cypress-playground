export const mediaLargerThan = (breakpoint) => (
  ({ theme }) => (
    `@media (min-width: ${theme.breakpoints[breakpoint]}px)`
  )
);

export default {};
