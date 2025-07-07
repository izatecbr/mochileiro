// plugins/supabase.js
import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()

    const supabaseUrl = config.public.supabaseStorageUrl || ''
    const supabaseKey = config.public.supabaseKey || ''

    const supabase = createClient(supabaseUrl, supabaseKey)
    return {
        provide: {
            supabase,
        },
    }
})
