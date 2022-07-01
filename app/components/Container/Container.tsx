import { useState } from "react"
import { Box } from "@components/Box"
import { HiOutlineChevronDown } from "react-icons/hi"
import * as styles from "./styles.css"

interface IProps {
  children: any
  extra?: any
  extraTitle?: string
}

export const links = () =>
  __vanillaStyle.map((href) => ({
    rel: "stylesheet",
    href,
  }))

export function Container({ children, extra, extraTitle }: IProps) {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <Box
        component="section"
        className={styles.container}
        background={{ lightMode: "white", darkMode: "neutral_3" }}
        padding="large"
        borderRadius="medium"
        marginBottom="medium"
        marginX="medium"
      >
        {children}
        {isOpen && extra}
      </Box>
      {!!extra && !isOpen && (
        <Box className={styles.extra} onClick={() => setOpen(true)}>
          {extraTitle} <HiOutlineChevronDown size="24px" />
        </Box>
      )}
    </>
  )
}
