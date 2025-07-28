"use client"

import * as React from "react"
import { Search, X } from "lucide-react"
import { cn } from "../../lib/utils"

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void
  showClearButton?: boolean
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, onClear, showClearButton = true, ...props }, ref) => {
    const [value, setValue] = React.useState((props.value as string) || "")

    const handleClear = () => {
      setValue("")
      onClear?.()
      // Trigger onChange event with empty value
      if (props.onChange) {
        const event = {
          target: { value: "" },
        } as React.ChangeEvent<HTMLInputElement>
        props.onChange(event)
      }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
      props.onChange?.(e)
    }

    React.useEffect(() => {
      setValue((props.value as string) || "")
    }, [props.value])

    return (
      <div className="relative group w-full">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
          <Search className="h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors duration-200" />
        </div>
        <input
          type="text"
          className={cn(
            "flex h-12 w-full rounded-xl border-2 border-gray-200 bg-white/90 backdrop-blur-sm pl-12 pr-12 py-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:border-red-500 disabled:cursor-not-allowed disabled:opacity-50 shadow-lg hover:shadow-xl hover:border-red-300 transition-all duration-300",
            className,
          )}
          ref={ref}
          value={value}
          onChange={handleChange}
          {...props}
        />
        {showClearButton && value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-red-500 transition-colors duration-200 z-10"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    )
  },
)
SearchInput.displayName = "SearchInput"

export { SearchInput }
