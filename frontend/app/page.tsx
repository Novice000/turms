import React from 'react'

function Home() {
  return (
    <div className="h-screen w-screen">
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwKD98iG8sFc&q=Tokyo`}
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
      />
    </div>
  )
}

export default Home