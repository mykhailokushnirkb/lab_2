export default function Header() {
  return (
    <header>
      <h1>Кушнір Михайло Ярославович</h1>
      <p>Студент групи КБ-402</p>
      <p>Лабораторна робота №2. Варіант 11.</p>

      <nav aria-label="Розділи резюме">
        <a href="#about">Про мене</a> |{" "}
        <a href="#skills">Навички</a> |{" "}
        <a href="#experience">Досвід</a> |{" "}
        <a href="#education">Освіта</a> |{" "}
        <a href="#contacts">Контакти</a>
      </nav>
    </header>
  );
}