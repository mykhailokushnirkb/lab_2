import { useEffect, useState } from 'react'

export default function Reviews() {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function fetchComments() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts/11/comments',
          { signal: controller.signal }
        )

        if (!response.ok) {
          throw new Error(`Помилка HTTP: ${response.status}`)
        }

        const data = await response.json()

        if (!controller.signal.aborted) {
          setComments(data)
        }
      } catch (fetchError) {
        if (!controller.signal.aborted) {
          setError('Не вдалося завантажити коментарі.')
          console.error(fetchError)
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchComments()

    return () => controller.abort()
  }, [])

  return (
    <section
      id="reviews"
      className="mb-8 rounded-2xl bg-white p-6 shadow-md"
    >
      <h2 className="mb-4 border-b-2 border-blue-200 pb-2 text-2xl font-bold text-blue-900">
        Коментарі попередніх роботодавців
      </h2>

      <p className="mb-4 text-sm text-slate-500">
        Навчальні відгуки із JSONPlaceholder. Варіант 11.
      </p>

      <div aria-live="polite">
        {loading && <p>Завантаження коментарів…</p>}

        {error && (
          <p role="alert" className="text-red-700">
            {error}
          </p>
        )}

        {!loading && !error && comments.length === 0 && (
          <p>Коментарів поки немає.</p>
        )}

        <div className="grid gap-4">
          {comments.map((comment) => (
            <article
              key={comment.id}
              className="rounded-xl border-l-4 border-blue-500 bg-slate-50 p-5"
            >
              <h3 className="text-lg font-semibold break-words text-blue-900">
                {comment.name}
              </h3>

              <p className="mt-2 text-sm break-all text-slate-500">
                Email: {comment.email}
              </p>

              <p className="mt-3 leading-7 whitespace-pre-line text-slate-700">
                {comment.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}