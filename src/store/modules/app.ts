import {
  Module,
  VuexModule,
  Mutation,
  Action,
  MutationAction,
  getModule
} from 'vuex-module-decorators'

import { BODY_POSITION, BODY_TOP } from '../types'

import store from '../'

export interface IAppState {
  bodyPosition: string
  bodyTop: number
}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements IAppState {
  bodyPosition = ''
  bodyTop = 0
  @Mutation
  [BODY_POSITION] (position: any) {
    this.bodyPosition = position
  }

  @Mutation
    [BODY_TOP] (top: any) {
    this.bodyTop = top
  }
}

export default getModule(App)
