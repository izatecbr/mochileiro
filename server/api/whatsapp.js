import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  if (!body?.interesse) {
    throw createError({ statusCode: 400, message: 'Dados inválidos' })
  }

  const interesse = body.interesse

  const supabase = createClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_KEY
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
  const whats = `${anfitriao.contato.telefone?.ddi}${anfitriao.contato.telefone.ddd}${anfitriao.contato.telefone.numero}`

  return {
    success: true,
    whatsappUrl: `https://wa.me/${whats}?text=Olá, descobri você pelo site Mochileiro.tec e gostaria de saber um pouco mais sobre esta ${interesse.tipo.legenda} - ${interesse.legenda}`
  }
})
