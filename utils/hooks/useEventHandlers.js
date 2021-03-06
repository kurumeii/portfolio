import {useEffect, useRef} from 'react'

export default function useEventHandlers(eventName, callBack) {
  //Create a ref that stored handler
  const savedHandler = useRef()
  savedHandler.current = callBack
  useEffect(() => {
    const elem = window
    //make sure elem supports addEventListener
    const isSupported = elem && elem.addEventListener
    if (isSupported) {
      //Create an event listener which calls callback function stored in ref
      const eventListener = e => savedHandler.current(e)

      //Add event listener
      elem.addEventListener(eventName, eventListener)

      return () => elem.removeEventListener(eventName, eventListener)
    }
  }, [eventName, callBack])
}
