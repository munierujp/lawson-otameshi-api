export type AssertThat = (value: any) => {
  matches(callback: Function): void
  doesNotMatch(callback: Function): void
  is(expected: any): void
  isNot(expected: any): void
  isNull(): void
  isNotNull(): void
  isUndefined(): void
  isNotUndefined(): void
  isTrue(): void
  isFalse(): void
}
