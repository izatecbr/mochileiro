import { createError, sendStream } from 'h3'
import { $fetch } from 'ofetch'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.supabaseStorageUrl
  const bucket = 'mochileiro'

  const rawPath = event.context.params.path
  const pathParts = Array.isArray(rawPath) ? rawPath : rawPath.split('/')

  if (!pathParts || pathParts.length < 3) {
    throw createError({ statusCode: 400, message: 'Invalid path' })
  }

  const contexto = pathParts[0]
  const id = pathParts[1]
  const filename = pathParts.slice(2).join('/')

  const supabaseUrl = `${baseUrl}/${bucket}/${contexto}/${id}/${filename}`

  try {
    const response = await $fetch.raw(supabaseUrl, { responseType: 'stream' })

    if (!response?.body) {
      throw createError({ statusCode: 404, message: 'Image not found' })
    }

    return sendStream(event, response.body, {
      headers: {
        'Content-Type': response.headers.get('content-type') || 'application/octet-stream',
        'Cache-Control': 'public, max-age=3600'
      }
    })
  } catch (err) {
    console.error(`Error fetching image: ${supabaseUrl}`)
    throw createError({ statusCode: 404, message: `Not found: ${contexto}/${id}/${filename}` })
  }
})
