import { Exports } from './types/GASUnit'
import { AssertThat } from './types/AssertGAS'
import createJSONResponse_ from './createJSONResponse_'

// eslint-disable-next-line @typescript-eslint/camelcase
function test_createJSONResponse_ (exports: Exports, assertThat: AssertThat): void {
  exports({
    createJSONResponse_: {
      'should return TextOutput object': () => {
        const body = {
          foo: 'bar'
        }
        const resp = createJSONResponse_(body)
        assertThat(resp.getMimeType()).is(ContentService.MimeType.JSON)
        assertThat(resp.getContent()).is(JSON.stringify(body))
      }
    }
  })
}

// eslint-disable-next-line @typescript-eslint/camelcase
export default test_createJSONResponse_
