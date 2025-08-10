import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarTrigger,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
} from '@/components/ui/sidebar'
import { AppSidebarClient } from './_AppSidebarClient'
import { LogInIcon } from 'lucide-react'
import Link from 'next/link'
import { SignedOut } from './services/clerk/components/SignInStatus'
import { SidebarUserButton } from '@/features/users/components/SidebarUserButton'


export default function HomePage() {
  return (
    <SidebarProvider className='overflow-y-hidden'>
      <AppSidebarClient>
        <Sidebar collapsible='icon' className='overflow-hidden'>
          <SidebarHeader className='flex-row'>
            <SidebarTrigger></SidebarTrigger>
            <span className='text-xl text-nowrap'>WDS Jobs</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SignedOut>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href='/sign-in'>
                        <LogInIcon />
                        <span>Log In</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SignedOut>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarUserButton />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <main className='flex-1'>dsdsdss</main>
      </AppSidebarClient>
    </SidebarProvider>
  )
}
