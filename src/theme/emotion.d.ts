import { SerializedStyles } from '@emotion/react'

import { AppTheme } from './types'

import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
  export type CssThemed<T = object> = (
    param: { theme: Theme } & T,
  ) => SerializedStyles
}
