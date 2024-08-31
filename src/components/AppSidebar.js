import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../../src/scss/common.css';

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import LOGOPRO from 'src/assets/images/avatars/LOGOPRO.jpg'
import { sygnet } from 'src/assets/brand/sygnet'

// sidebar nav config
import navigation from '../_nav'
import { auto, left } from '@popperjs/core'
import huntLogo from '../../public/logo/tlogo1.png'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      className="border-end"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
      style={{background: "url('../../logo/tbg.png')"}}
    >
      <CSidebarHeader className="border-bottom">
      <CSidebarBrand to="/">
          
          <img className='d-block' src={huntLogo} alt = 'Hunting Website' style={{ height: "120px", width: '150px', borderRadius: "1rem", padding: "0.7rem", marginLeft: "2rem"}} />

          {/* <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} /> */}
          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
        </CSidebarBrand>
     
      </CSidebarHeader>
      <AppSidebarNav items={navigation} />
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
