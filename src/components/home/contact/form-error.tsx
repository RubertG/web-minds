export const FormError = ({
  children, className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={`text-red-500 text-sm mt-2 transition-colors ${className}`}>
      {children}
    </div>
  )
}
