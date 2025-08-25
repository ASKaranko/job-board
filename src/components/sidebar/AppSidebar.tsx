import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarTrigger,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { SignedIn } from '@/app/services/clerk/components/SignInStatus'
import { AppSidebarClient } from './_AppSidebarClient'
import { ReactNode } from 'react'

export function AppSidebar({children, content, footerButton }: { content: ReactNode; footerButton: ReactNode; children: ReactNode }) {
  return (
    <SidebarProvider className='overflow-y-hidden'>
      <AppSidebarClient>
        <Sidebar collapsible='icon' className='overflow-hidden'>
          <SidebarHeader className='flex-row'>
            <SidebarTrigger></SidebarTrigger>
            <span className='text-xl text-nowrap'>WDS Jobs</span>
          </SidebarHeader>
          <SidebarContent>{content}</SidebarContent>
          <SignedIn>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>{footerButton}</SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </SignedIn>
        </Sidebar>
        <main className='flex-1'>{children}</main>
      </AppSidebarClient>
    </SidebarProvider>
  )
}
