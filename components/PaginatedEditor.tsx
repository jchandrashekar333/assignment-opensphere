"use client"

import { useEffect, useRef, useState } from "react"
import Page from "./Page"
import Editor from "./Editor"

const MAX_CONTENT_HEIGHT = 864

export default function PaginatedEditor() {
  const editorWrapperRef = useRef<HTMLDivElement>(null)
  const [pages, setPages] = useState<HTMLElement[][]>([])

  const paginate = () => {
    const proseMirror = editorWrapperRef.current?.querySelector(".ProseMirror")
    if (!proseMirror) return

    const blocks = Array.from(proseMirror.children) as HTMLElement[]

    const newPages: HTMLElement[][] = []
    let currentPage: HTMLElement[] = []
    let currentHeight = 0

    blocks.forEach(block => {
      const blockHeight = block.offsetHeight

      if (currentHeight + blockHeight > MAX_CONTENT_HEIGHT) {
        newPages.push(currentPage)
        currentPage = []
        currentHeight = 0
      }

      currentPage.push(block)
      currentHeight += blockHeight
    })

    if (currentPage.length) {
      newPages.push(currentPage)
    }

    setPages(newPages)
  }

  useEffect(() => {
    requestAnimationFrame(paginate)
  }, [])

  return (
    <>
      {/* Hidden editor for measurement */}
      <div ref={editorWrapperRef} style={{ visibility: "hidden", position: "absolute" }}>
        <Editor onUpdate={() => requestAnimationFrame(paginate)} />
      </div>

      {/* Visible paginated pages */}
      {pages.map((blocks, pageIndex) => (
        <Page key={pageIndex}>
          {blocks.map((block, i) => (
            <div
              key={i}
              dangerouslySetInnerHTML={{ __html: block.outerHTML }}
            />
          ))}
        </Page>
      ))}
    </>
  )
}
