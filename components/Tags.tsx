import React from "react"
import { Twemoji } from 'react-emoji-render'
import Link from './Link'

const H3 = (props: JSX.IntrinsicElements['h3']) => {
  return (
    <h3 className="text-xl font-bold font-sans leading-snug mb-4 tracking-tight mt-10"
      {...props} />
  )
}

const UL = (props: JSX.IntrinsicElements['ul']) => {
  return <ul className="my-4 ml-5 list-disc" {...props} />
}

const LI = (props: JSX.IntrinsicElements['li']) => {
  return <li className="my-2" {...props} />
}

const P = (props: JSX.IntrinsicElements['p']) => {
  return <p className="my-6" {...props} />
}

const A = (props: JSX.IntrinsicElements['a']) => {
  return <Link className="underline hv:hover:bg-yellow-400" {...props} />
}

const E = ({ children }: { children: string}) => {
  return <Twemoji className="inline-flex align-middle h-auto" svg text={children}/>
}

export {
  H3,
  UL,
  LI,
  P,
  A,
  E,
}