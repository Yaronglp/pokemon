import Typography from "@mui/material/Typography";
import { Component } from "react";

export class ErrorBoundary extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return  (
        <Typography sx={{color: "#c5341a"}} variant="h6" component="h6">
          There is an Error - please try again.
        </Typography>
      )
    }

    return this.props.children
  }
}