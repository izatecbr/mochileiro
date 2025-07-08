import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const body = await readBody(event)

  if (!body?.email) {
    throw createError({ statusCode: 400, message: 'Email é obrigatório' })
  }

  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseKey
  )

  const { error } = await supabase
    .from('tab_email')
    .insert([{ email: body.email, cancelado: false }])

  if (error) {
    console.error(error)
    throw createError({ statusCode: 500, message: 'Erro ao salvar no banco' })
  }

  return { success: true, message: 'Email cadastrado com sucesso!' }
})
