import * as S from "./style"
import {Outlet} from "react-router-dom"
import { ComponentHeader, ComponentFooter } from "../../components"
import React from "react"


export function Layout() {
    return (
      <>
        <ComponentHeader />
        <S.Main>
          <Outlet />
          </S.Main>
      <ComponentFooter />
    </>
  )
} 