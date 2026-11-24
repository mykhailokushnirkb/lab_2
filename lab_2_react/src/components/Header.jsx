export default function Header() {
  return (
    <header className="mb-8 rounded-2xl bg-blue-900 p-6 text-white shadow-md md:p-8">
      <h1 className="text-3xl font-bold md:text-4xl">
        Кушнір Михайло Ярославович
      </h1>

      <p className="mt-3 text-lg">
        Студент групи КБ-402
      </p>

      <p className="mt-2 text-sm text-blue-100">
        Лабораторна робота №3. Варіант 11.
      </p>

      <nav
        aria-label="Розділи резюме"
        className="mt-6 flex flex-wrap gap-4"
      >
        <a className="hover:underline" href="#about">
          Про мене
        </a>
        <a className="hover:underline" href="#skills">
          Навички
        </a>
        <a className="hover:underline" href="#experience">
          Досвід
        </a>
        <a className="hover:underline" href="#education">
          Освіта
        </a>
        <a className="hover:underline" href="#contacts">
          Контакти
        </a>
      </nav>
    </header>
  )
}