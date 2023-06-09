import { TurnstileServerValidationResponse } from '@marsidev/react-turnstile'

export async function verify(token: string) {
  const formData = new FormData()
  formData.append('secret', process.env.CF_TURNSTILE_SECRET_KEY)
  formData.append('response', token)

  const result = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      body: formData,
    }
  )
  const outcome: TurnstileServerValidationResponse = await result.json()

  return outcome.success
}
