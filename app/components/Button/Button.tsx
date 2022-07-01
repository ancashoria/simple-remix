import { Box } from "@components/Box"
import cn from "classnames"

import * as styles from "./styles.css"

interface IProps {
  variant: "primary"
  children: any
}

export const links = () =>
  __vanillaStyle.map((href) => ({
    rel: "stylesheet",
    href,
  }))

export function Button({ variant = "primary", children }: IProps) {
  return (
    <Box
      className={cn({
        [styles.primary]: variant === "primary"
      })}
      component="button"
    >
      {children}
    </Box>
  )
}
