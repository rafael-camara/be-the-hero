import { LinkingOptions } from '@react-navigation/native'

import { RootStackParamList } from '../modules/module/RootStack'

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['/'],
  config: {
    screens: {
      Incidents: 'incidents',
      Detail: 'detail'
    },
  },
}

export default linking