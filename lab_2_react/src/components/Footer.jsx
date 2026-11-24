export default function Footer() {
  return (
    <footer
      id="contacts"
      className="rounded-2xl bg-slate-900 p-6 text-center text-white shadow-md"
    >
      <h2 className="mb-3 text-xl font-semibold">
        Контакти
      </h2>

      <p className="mb-2 text-slate-300">
        Електронна пошта:
      </p>

      <a
        href="mailto:mykhailo.kushnir.kb.2023@lpnu.ua"
        className="rounded break-all text-blue-200 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
      >
        mykhailo.kushnir.kb.2023@lpnu.ua
      </a>
    </footer>
  )
}