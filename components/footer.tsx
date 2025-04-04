export default function Footer() {
  return (
    <footer className="bg-pink-300 p-6 sm:py-4 text-center text-white">
      <p className="mb-2">✧･ﾟ Say Ethereum ✧･ﾟ A pronunciation guide ✧･ﾟ</p>
      <p className="text-sm">
        Provided by{' '}
        <a
          href="https://geodework.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-purple-100"
        >
          Geodework
        </a>{' '}
        •{' '}
        <a
          href="https://localethereum.beehiiv.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-purple-100"
        >
          Local Ethereum Newsletter
        </a>
      </p>
    </footer>
  )
}
