import {
  NavListChildren,
  NavListButtonToggle,
  NavListLink,
  NavListItem
} from './nav.styled'
import { ChevronDownLight, ChevronUpLight } from 'components/icons'
import { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'

export type PropsNavItem = {
  text: string;
  to?: string;
  subItems?: Array<PropsNavItem>;
}

const NavItem: FC<PropsNavItem> = ({ text, subItems, to }) => {
  const [toogleSubItems, setToggleSubItems] = useState(false)
  const { pathname } = useLocation()

  return (
    <NavListItem>
      {subItems && (
        <>
          <NavListButtonToggle onClick={() => setToggleSubItems(!toogleSubItems)} >
            <NavListLink to={to} className={pathname === to ? 'active' : ''} >
              {text}
            </NavListLink>
            {toogleSubItems
              ? (
                  <ChevronUpLight />
                )
              : (
                  <ChevronDownLight />
                )}
          </NavListButtonToggle>

          <NavListChildren className={toogleSubItems ? 'active' : ''}>
            {subItems.map((child: NavItemProps, index) => (
              <NavListItem key={index}>
                <NavListLink to={child.to} className={pathname === child.to ? 'active' : ''} >
                  {child.text}
                </NavListLink>
              </NavListItem>
            ))}
          </NavListChildren>
        </>
      )}

      {!subItems && (
        <NavListLink to={to} className={pathname === to ? 'active' : ''} >
          {text}
        </NavListLink>
      )}
    </NavListItem>
  )
}

export default NavItem
