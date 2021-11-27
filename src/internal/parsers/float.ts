import { success, Parser, State } from '../state'

import { regexp } from './regexp'

const FLOAT_RE = /-?\d+\.\d+/g

export function float(): Parser<number> {
  return {
    parse(state: State) {
      const result = regexp(FLOAT_RE, 'float').parse(state)

      switch (result.kind) {
        case 'success': {
          return success(result.state, parseFloat(result.value))
        }

        case 'failure': {
          return result
        }
      }
    }
  }
}
