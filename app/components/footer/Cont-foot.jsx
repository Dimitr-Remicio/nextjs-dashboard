import React from 'react'

export default function FootContainer({ children }) {
  return (
    <div className="w-full px-40 flex flex-col m-0 b-0 relative">{children}</div>
  )
}

// Container.propTypes = {
//     children: PropTypes.element,
// };