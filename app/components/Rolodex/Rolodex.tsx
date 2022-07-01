import { Box } from "@components/Box"

interface IProps {
  children: Array<any>
}

export function Rolodex({ children }: IProps) {
  return (
    <Box>
      {children}
    </Box>
  )
}