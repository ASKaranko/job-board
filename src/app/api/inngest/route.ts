import { inngest } from '@/app/services/inngest/client'
import { clerkCreateUser, clerkDeleteUser, clerkUpdateUser } from '@/app/services/inngest/functions/clerk'
import { serve } from 'inngest/next'

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [clerkCreateUser, clerkUpdateUser, clerkDeleteUser],
})
