import { sprinkles } from "@styles/sprinkles.css";
import { vars } from "@styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  border: `1px solid ${vars.color.neutral_1}`
})

export const extra = style([
  sprinkles({
    fontWeight: "500",
    background: "white",
    marginX: "medium",
    display: "flex",
    paddingLeft: "xlarge",
    paddingRight: "large",
    paddingY: "large",
    justifyContent: "space-between",
    position: "relative",
    borderRadius: "medium",
    color: "secondary",
    zIndex: -1
  }),
  {
    border: `1px solid ${vars.color.neutral_1}`,
    transform: "translateY(-16px)",
    ':hover': {
      textDecoration: 'underline'
    }
  }
])