import { sprinkles } from "@styles/sprinkles.css"
import { vars } from "@styles/theme.css"
import { style, styleVariants } from "@vanilla-extract/css"

export const primary = style([
  sprinkles({
    fontSize: "1x",
    fontWeight: '500',
    paddingX: "xlarge",
    paddingY: "small",
    borderRadius: "full",
    color: "white",
    transition: "all 0.3s",
    boxShadow: "medium"
  }),
  {
    background: `linear-gradient(157deg, ${vars.color.primary} 10%, ${vars.color.secondary} 50%)`,
    ":hover": {
      background: `linear-gradient(157deg, ${vars.color.primary}, ${vars.color.secondary})`
    }
  }
])
