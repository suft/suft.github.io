import React from "react"
import { Twemoji } from 'react-emoji-render'
import Link from './Link'

const H3 = (props: JSX.IntrinsicElements['h3']) => {
  return (
    <h3 className="mt-10 mb-4 text-xl font-bold leading-snug tracking-tight font-body"
      {...props} />
  )
}

const UL = (props: JSX.IntrinsicElements['ul']) => {
  return <ul className="my-4 ml-5 list-disc font-body" {...props} />
}

const LI = (props: JSX.IntrinsicElements['li']) => {
  return <li className="my-2 font-body" {...props} />
}

const P = (props: JSX.IntrinsicElements['p']) => {
  return <p className="my-6 font-body" {...props} />
}

const A = (props: JSX.IntrinsicElements['a']) => {
  return <Link className="underline font-body hv:hover:bg-yellow-400 dark:hover:bg-pink-400" {...props} />
}

const E = ({ children }: { children: string}) => {
  return <Twemoji className="inline-flex h-auto align-middle" svg text={children}/>
}

export {
  H3,
  UL,
  LI,
  P,
  A,
  E,
}