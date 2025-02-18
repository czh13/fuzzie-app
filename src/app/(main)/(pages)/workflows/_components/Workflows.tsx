import React from 'react'
import Workflow from './Workflow'

type Props = {}

const Workflows = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col m-2">
        <Workflow name="Workflow 1" description="Workflow 1 description" id="1" publish={true} />
      </section>
    </div>
  )
}

export default Workflows