export const backgroundColor = () => (
  ({ theme }) => (theme.backgroundColor)
);

export const textColor = () => (
  ({ theme }) => (theme.textColor)
);

export const spacing = (unit) => (
  ({ theme }) => (`${theme.spacing[unit]}px`)
);

export const mediaLargerThan = (breakpoint) => (
  ({ theme }) => (
    `@media (min-width: ${theme.breakpoints[breakpoint]}px)`
  )
);

export default {};
