export type Exports = (suite: object) => void
export type Assert = (value: any) => void
export type Slack = (url: string) => { exports: Exports }
