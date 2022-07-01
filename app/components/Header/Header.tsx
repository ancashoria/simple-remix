import { Box } from "@components/Box"
import { Logo } from "@components/Logo/Logo"

export function Header() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      paddingX="xlarge"
      paddingY="large"
    >
      <Logo />
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
        <defs>
          <clipPath id="a">
            <rect width="21" height="21" fill="none" />
          </clipPath>
        </defs>
        <g clipPath="url(#a)">
          <g transform="translate(-334 -73)">
            <rect width="7" height="7" rx="3.5" transform="translate(334 73)" fill="#222" />
          </g>
          <g transform="translate(-321 -73)">
            <rect width="7" height="7" rx="3.5" transform="translate(334 73)" fill="#222" />
          </g>
          <g transform="translate(-334 -60)">
            <rect width="7" height="7" rx="3.5" transform="translate(334 73)" fill="#222" />
          </g>
          <g transform="translate(-321 -60)">
            <rect width="7" height="7" rx="3.5" transform="translate(334 73)" fill="#222" />
          </g>
        </g>
      </svg>
    </Box>
  )
}
