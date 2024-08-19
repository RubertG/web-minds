"use client"

import { forwardRef } from "react"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  classNameLabel?: string
  optional?: boolean
}

export const Input = forwardRef(function Input({ classNameLabel, className, label, optional = false, ...props }: Props, ref: React.Ref<HTMLInputElement>) {
  return (
    <>
      <label
        className={`block ${classNameLabel}`}
        htmlFor={props.name}
      >
        {label} {!optional && <span className="text-principal">*</span>}
      </label>
      <input
        className={`lg:text-base w-full mt-2 text-text-200 bg-transparent px-5 py-2.5 rounded-lg border border-bg-300 focus:border-principal focus:outline-none transition-colors text-sm ${className}`}
        ref={ref}
        {...props}
      />
    </>
  )
})

interface PropsTextarea extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  classNameLabel?: string
  optional?: boolean
}

export const Textarea = forwardRef(function Textarea({ classNameLabel, className, label, optional = false, ...props }: PropsTextarea, ref: React.Ref<HTMLTextAreaElement>) {
  return (
    <>
      <label
        className={`block ${classNameLabel}`}
        htmlFor={props.name}
      >
        {label} {!optional && <span className="text-principal">*</span>}
      </label>
      <textarea
        className={`lg:text-base w-full mt-2 text-text-200 bg-transparent px-5 py-2.5 rounded-lg border border-bg-300 focus:border-principal focus:outline-none transition-colors text-sm ${className}`}
        ref={ref}
        {...props}
      />
    </>
  )
})