import React from 'react'

export default function Container({ children }) {
  return (
    <div className="w-full px-40 flex flex-col mb-80 ">{children}</div>
  )
}

// Container.propTypes = {
//     children: PropTypes.element,
// };