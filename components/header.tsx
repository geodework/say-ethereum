export default function Header() {
  return (
    <header className="bg-pink-300 py-4 border-b-4 border-dashed border-white">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="border-2 border-purple-400 rounded-full">
            <div className="bg-purple-500 rounded-full border-4 border-white">
              <div className="w-11 h-11 flex items-center justify-center text-4xl text-purple-100 pb-1">
                ⟠
              </div>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-purple-700 drop-shadow-md">
            Say Ethereum
          </h1>
        </div>
        {/* ✧･ﾟ( ミ ᴗ ミ )ﾉ･ﾟ✧ */}
        <div className="text-white sm:text-xl md:text-2xl">
          A Geodework Project ✧･ﾟ( ミ ᴗ ミ )ﾉ･ﾟ✧
        </div>
      </div>
    </header>
  )
}
