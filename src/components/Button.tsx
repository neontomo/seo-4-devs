function Button({
  icon,
  text,
  onClick,
  disabled = false
}: {
  icon?: React.ReactNode
  text: string
  onClick: () => void
  disabled?: boolean
}) {
  return (
    <button
      className="btn btn-neutral btn-sm"
      onClick={onClick}
      disabled={disabled}>
      {icon} {text}
    </button>
  )
}

export default Button
