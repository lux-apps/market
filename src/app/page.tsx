import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          LUX Market
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl">
          The NFT Marketplace
        </p>
        <p className="text-lg text-gray-400 max-w-2xl">
          Discover, collect, and trade unique digital assets on the Lux blockchain.
        </p>
      </section>

      {/* Feature Sections */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Digital Art</h2>
          <p className="text-lg text-gray-400">Collect unique digital artworks from creators around the world.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Gaming NFTs</h2>
          <p className="text-lg text-gray-400">Trade in-game items and assets with true ownership.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Creator Tools</h2>
          <p className="text-lg text-gray-400">Launch your own NFT collection with our easy-to-use creator tools.</p>
        </div>
      </section>

    </main>
  )
}
