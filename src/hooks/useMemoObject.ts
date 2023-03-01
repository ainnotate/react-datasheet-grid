import { useMemo } from 'react'

export const useMemoObject = <T>(object: T): T => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // @ts-ignore
    return useMemo<T>(() => object, Object.values(object))
}
