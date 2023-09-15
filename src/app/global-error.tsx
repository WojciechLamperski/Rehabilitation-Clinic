'use client'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h2>Coś poszło nie tak, proszę spróbuj ponownie później</h2>
      </body>
    </html>
  )
}