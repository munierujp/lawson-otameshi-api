import { Exports, Assert, Slack } from './types/GASUnit'

declare const GASUnit: {
  exports: Exports
  assert: Assert
  slack: Slack
}

export default GASUnit
