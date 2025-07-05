// plugins/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bvnupbtbbaobfnmoidoc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2bnVwYnRiYmFvYmZubW9pZG9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3MjQ3MDcsImV4cCI6MjA2NzMwMDcwN30.rmwy6H6-31MNcm2C7fQNDaeGIxBVybmoNFFhjniVD6E'

export default defineNuxtPlugin(() => {
    const supabase = createClient(supabaseUrl, supabaseKey)
    return {
        provide: {
            supabase,
        },
    }
})
