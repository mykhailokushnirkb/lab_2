export default function Skills() {
  return (
    <section
      id="skills"
      className="mb-8 rounded-2xl bg-white p-6 shadow-md"
    >
      <h2 className="mb-4 border-b-2 border-blue-200 pb-2 text-2xl font-bold text-blue-900">
        Навички
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="mb-3 text-lg font-semibold">
            Програмування та вебтехнології
          </h3>

          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            <li>Основи програмування мовою C.</li>
            <li>Робота з базами даних і SQL.</li>
            <li>Створення структури вебсторінок за допомогою HTML.</li>
            <li>Стилізація сторінок за допомогою CSS і Tailwind CSS.</li>
            <li>Створення компонентів React.</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold">
            Комп’ютерні системи та мережі
          </h3>

          <ul className="list-disc space-y-2 pl-5 text-slate-700">
            <li>Основи побудови комп’ютерних мереж.</li>
            <li>Робота з командним рядком Windows.</li>
            <li>Основи інформаційної безпеки та інтернет-гігієни.</li>
            <li>Використання Git і GitHub.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}