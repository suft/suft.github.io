import React, { ReactNode } from 'react'
import cn from 'classnames'

type Props = {
  children: ReactNode
}

const Title = ({ children }: Props) => {
  return (
    <span className={cn('text-4xl leading-tight tracking-tighter font-display font-bold')}>
      {children}
    </span>
  )
}

export default Title