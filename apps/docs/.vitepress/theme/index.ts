import DefaultTheme from 'vitepress/theme'
import { CountdownDemo } from '../components/react/CountdownDemo'
import { EventDemo } from '../components/react/EventDemo'
import { AsyncQueueDemo } from '../components/react/AsyncQueueDemo'
import { RequestDemo } from '../components/react/RequestDemo'
import { PhysicsDemo } from '../components/react/PhysicsDemo'
import { createReactWrapper } from './ReactWrapper'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CountdownDemo', createReactWrapper(CountdownDemo))
    app.component('EventDemo', createReactWrapper(EventDemo))
    app.component('AsyncQueueDemo', createReactWrapper(AsyncQueueDemo))
    app.component('RequestDemo', createReactWrapper(RequestDemo))
    app.component('PhysicsDemo', createReactWrapper(PhysicsDemo))
  }
}
