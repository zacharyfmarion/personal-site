'use client'
 
import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager, createGlobalStyle } from 'styled-components'
import theme from '@/constants/theme'
 
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: Montserrat, sans-serif;
  }
    p,span,h1,h2,h3,h4,h5,h6,div,a {
      &::selection {
        background: ${theme.colors.primary};
        color: #fff;
      }
    }

  pre {
    border-radius: 3px;
  }
`
 
export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())
 
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })
 
  if (typeof window !== 'undefined') {
    return <>
      <GlobalStyles />
      {children}
    </>
  }
 
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}