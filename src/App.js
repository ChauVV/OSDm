import React from 'react'

import storeRedux from 'backend/Redux/store'
// import * as actionsType from 'backend/Redux/actionsType/globalactionsType'
// import init from 'backend/Redux/lib/initState'
// import { checkLocalStoreToRedux } from 'backend/Redux/lib/reducerConfig'
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
