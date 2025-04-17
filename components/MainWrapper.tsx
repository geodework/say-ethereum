export default function MainWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex-1 bg-blue-50 py-8 px-4">
      <article className="max-w-4xl mx-auto bg-pink-50 rounded-3xl border-4 border-dashed border-pink-200 p-6 md:p-6">
        {children}
      </article>
    </main>
  )
}

export const LegalCss = {
  subtitleCss: "text-lg font-bold mt-4 mb-2",
  titleCss: "text-xl font-bold text-pink-400 mb-2",
  listWrapperCss: "list-disc pl-6 space-y-2",
}
