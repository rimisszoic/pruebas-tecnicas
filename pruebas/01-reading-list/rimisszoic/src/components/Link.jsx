import { useRouterScroll } from '../hooks/useRouterScroll'

export function Link({ target, targetId, ...props }) {
  const { handleCurrentPath } = useRouterScroll()

  const handleClick = (event) => {
    const { altKey, ctrlKey, shiftKey, metaKey } = event

    const isDifferentEvent = altKey || ctrlKey || shiftKey || metaKey
    const isManageableEvent = !target || target === "_self"

    if (!isDifferentEvent && isManageableEvent) {
      event.preventDefault()
      handleCurrentPath(targetId)
    }
  }

  return <a href={targetId} onClick={handleClick} target={target} {...props} />
}
