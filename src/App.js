import React from 'react'

import storeRedux from 'reduxer/store'
// import * as actionsType from 'reduxactionsType/globalactionsType'
// import init from 'reduxlib/initState'
// import { checkLocalStoreToRedux } from 'reduxlib/reducerConfig'
import { Provider } from 'react-redux'
import MainLayout from 'frontend/Container/MainLayout'

const App = () => {
  return (
    <Provider store={storeRedux}>
      <MainLayout/>
    </Provider>
  )
}

export default App
