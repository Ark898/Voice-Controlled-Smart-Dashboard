import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="/" target="_blank" rel="noopener noreferrer">
          ORION
        </a>
        <span className="ms-1">&copy; 2025 ArkCreations.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="/" target="_blank" rel="noopener noreferrer">
          ORION AI Smart Dashboard
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
