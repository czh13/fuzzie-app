import { CONNECTIONS } from '@/lib/constant'
import React from 'react'
import ConnectionCard from './_components/ConnectionCard'


const ConnectionsPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-10 flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        SettConnectionsPageings
      </h1>
      <div className="relative flex flex-col gap-4">
        <section className="flex flex-col gap-4 p-6 text-muted-foreground">
          Connect all your apps directly from here. You may need to connect
          these apps regularly to refresh verification
          {
            CONNECTIONS.map((connection) => (
              <ConnectionCard key={connection.title}
                type={connection.title}
                icon={connection.image}
                title={connection.title}
                description={connection.description}
              />
            ))
          }
        </section>
      </div>
    </div>
  )
}

export default ConnectionsPage