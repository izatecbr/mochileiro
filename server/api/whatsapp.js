import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  if (!body?.interesse) {
    throw createError({ statusCode: 400, message: 'Dados inválidos' })
  }

  const interesse = body.interesse

  console.log(interesse)

  const supabase = createClient(
    config.public.supabaseStorageUrl,
    config.public.supabaseKey
  )

  const { error } = await supabase
    .from('tab_interesse')
    .insert([{
      anfitriao_id: interesse.anfitriaoObject.id,
      interesse_tipo: interesse.tipo.sigla,
      interesse_id: interesse.lid,
      legenda: interesse.legenda,
      valor: interesse.valor.quantia
    }])

  if (error) {
    console.error(error)
    throw createError({ statusCode: 500, message: 'Erro ao registrar interesse' })
  }

  const anfitriao = interesse.anfitriaoObject
  const whats = `${anfitriao.telefone.ddi}${anfitriao.telefone.ddd}${anfitriao.telefone.numero}`

  return {
    success: true,
    whatsappUrl: `https://wa.me/${whats}?text=Olá, descobri você pelo site Mochileiro.tec e gostaria de saber um pouco mais sobre esta ${interesse.tipo.legenda} - ${interesse.legenda}`
  }
})
