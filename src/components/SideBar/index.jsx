
import { NavLink } from 'react-router-dom'
import { FaBars, FaUsers, FaShare, FaPowerOff } from 'react-icons/fa'
import { Container, MenuList, MenuItem } from './styles'

export default function SideBar() {
  return (
    <Container>
      <MenuList>
        <MenuItem>
          <FaBars />
        </MenuItem>
        <NavLink to='/' >
          <MenuItem>
            <FaUsers />
          </MenuItem>
        </NavLink>
        <MenuItem>
          <FaShare />
        </MenuItem>
      </MenuList>

      <MenuList>
        <MenuItem className='logout' >
          <FaPowerOff />
        </MenuItem>
      </MenuList>
    </Container>
  )
}
