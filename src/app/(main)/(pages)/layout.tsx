import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  return (
    <div className="border-l border-t pb-20 h-screen rounded-l-3xl border-muted-foreground/20 overflow-scroll">
      {props.children}
    </div>
  )
}

export default Layout