export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-8 rounded-2xl bg-white p-6 shadow-md"
    >
      <h2 className="mb-4 border-b-2 border-blue-200 pb-2 text-2xl font-bold text-blue-900">
        Практичний досвід
      </h2>

      <p className="mb-4 leading-7 text-slate-700">
        Здобуваю практичні навички під час виконання
        лабораторних робіт в університеті.
      </p>

      <article className="rounded-xl border-l-4 border-blue-500 bg-slate-50 p-5">
        <h3 className="mb-3 text-lg font-semibold">
          Навчальні роботи та проєкти
        </h3>

        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>Написання програм для роботи з масивами та рядками.</li>
          <li>Робота з таблицями баз даних і SQL-запитами.</li>
          <li>Створення HTML-сторінки резюме.</li>
          <li>Перенесення резюме у React-компоненти.</li>
          <li>Оформлення резюме за допомогою CSS і Tailwind CSS.</li>
          <li>Збереження історії змін та публікація коду на GitHub.</li>
        </ul>
      </article>
    </section>
  )
}