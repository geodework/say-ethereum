export default function Footer() {
  return (
    <footer className="bg-pink-300 p-6 sm:py-4 text-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-center mb-4">
          ✧･ﾟ Say Ethereum ✧･ﾟ A pronunciation guide ✧･ﾟ
        </p>

        <div className="flex flex-col items-center">
          <div className="mb-4 text-center">
            <p className="font-bold text-lg">Powered by</p>
            <a
              href="https://geodework.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold underline hover:text-purple-100"
            >
              Geodework
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm mb-2">Our products:</p>
            <a
              href="https://localethereum.beehiiv.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm underline hover:text-purple-100"
            >
              Local Ethereum Newsletter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
