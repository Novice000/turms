import React from 'react'

// TODO: Add error handling for missing Google API key
function Home() {
  return (
    <div className="h-screen w-screen">
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_API_KEY}&q=Turin,Italy`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
      />
    </div>
  )
}

export default Home
