import { ReactNode } from 'react'
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
} from '@/components/ui/sidebar'

import { LogInIcon } from 'lucide-react'
import Link from 'next/link'
import { SidebarUserButton } from '@/features/users/components/SidebarUserButton'
import { SignedOut } from '../services/clerk/components/SignInStatus'
import { AppSidebar } from '@/components/sidebar/AppSidebar'

export default function EmployerLayout({children} : {children: ReactNode }) {
  return (
    <AppSidebar
      content={
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
      }
      footerButton={<SidebarUserButton />}
    >
      {children}
    </AppSidebar>
  )
}