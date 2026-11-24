import { useEffect, useState } from 'react'

export default function Footer() {
  const [storageInfo, setStorageInfo] = useState('Завантаження даних…')

  useEffect(() => {
    try {
      const systemInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        languages: navigator.languages,
        cookieEnabled: navigator.cookieEnabled,
        online: navigator.onLine,
        hardwareConcurrency:
          navigator.hardwareConcurrency ?? 'Недоступно',
        deviceMemory: navigator.deviceMemory ?? 'Недоступно',
        screenWidth: screen.width,
        screenHeight: screen.height,
        colorDepth: screen.colorDepth,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }

      localStorage.setItem('systemInfo', JSON.stringify(systemInfo))

      const storedData = Object.create(null)

      for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index)
        const value = localStorage.getItem(key)

        try {
          storedData[key] = JSON.parse(value)
        } catch {
          storedData[key] = value
        }
      }

      setStorageInfo(JSON.stringify(storedData, null, 2))
    } catch (error) {
      setStorageInfo('Не вдалося отримати доступ до localStorage.')
      console.error(error)
    }
  }, [])

  return (
    <footer
      id="contacts"
      className="rounded-2xl bg-slate-900 p-6 text-white shadow-md"
    >
      <div className="text-center">
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
      </div>

      <h2 className="mt-6 mb-3 text-xl font-semibold">
        Інформація із localStorage
      </h2>

      <pre className="max-w-full whitespace-pre-wrap break-all rounded-lg border border-slate-600 bg-slate-800 p-4 text-left text-xs leading-6 text-slate-200">
        {storageInfo}
      </pre>
    </footer>
  )
}