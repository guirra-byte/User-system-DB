import { v4 as uuidV4 } from 'uuid'

export class Entity<T>{

  props: T

  constructor(props: T) {

    this.props = props
  }
}