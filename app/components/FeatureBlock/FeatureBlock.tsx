import { Box } from "@components/Box"

interface IProps {
  title: any
  content: any
  icon: any
}

export function FeatureBlock({ title, content, icon, extra, extraTitle }: IProps) {
  return (
    <>
      <Box marginBottom="xlarge" paddingLeft="medium">
        <Box color="primary" marginBottom="xsmall">
          {icon}
        </Box>
        <Box component="h3" fontSize="2x" lineHeight="3x" fontWeight="500" marginBottom="small">
          {title}
        </Box>
        <Box component="p">{content}</Box>
      </Box>
    </>
  )
}
