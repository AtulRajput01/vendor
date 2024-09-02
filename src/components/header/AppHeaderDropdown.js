import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CAvatar,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilLockLocked,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar7 from './../../../public/logo/tlogo1.png'

const AppHeaderDropdown = () => {
  const navigateTo = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigateTo('/Login');
  };

  const handleProfileClick = () => {
    navigateTo('/Profile');
  };

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <CAvatar src={avatar7} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-body-secondary fw-semibold my-2">Settings</CDropdownHeader>
        <CDropdownItem onClick={handleProfileClick}>
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem onClick={handleLogout}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown;
