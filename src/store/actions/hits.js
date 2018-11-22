import Ajax from '../../common/ajax'
import config from '../../utils/config';

export const hits = ({ id, sid }) => {
  return (dispatch, getState) => {
    return new Promise(async resolve => {

      let [ err, data ] = await Ajax({
        url: config.api.hits({ id, sid }),
        method: 'get'
      })

      resolve([ err, data ]);

    })
  }
}