const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

// export function extend<T, U>(to: T, from: U): T & U {
//   for (const key in from) {
//     ;(to as T & U)[key] = from[key] as any
//   }
//   return to as T & U
// }

export function extend<T, U>(to: T, from: U): T & U {
  function copy(instance: Record<string, any>): void {
    Object.getOwnPropertyNames(instance).forEach(key => {
      Object.assign(to, {
        [key]: instance[key]
      })
    })

    const proto = Reflect.getPrototypeOf(instance)

    if (proto !== null) {
      copy(proto)
    }
  }

  copy(from)

  return to as T & U
}
