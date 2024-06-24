import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#171717', // text-neutral-900
        'primary-hover': '#0a0a0a', // text-neutral-950
        'primary-invert': '#fff', // text-white
        secondary: '#525252', // text-neutral-600
        tertiary: '#737373', // text-neutral-500
        brand: '#4338ca', // text-indigo-700
        disabled: '#a3a3a3', // text-neutral-400
        error: '#dc2626', // text-red-600
        'error-emphasize': '#991b1b', // text-red-800
        success: '#15803d', // text-green-700
        warning: '#a16207', // text-amber-700
        // Background colors
        'bg-primary': '#fff', // bg-white
        'bg-primary-inverted': '#0a0a0a', // bg-neutral-950
        'bg-primary-hover': '#fafafa', // bg-neutral-50
        'bg-secondary': '#e5e7eb', // bg-gray-200
        'bg-secondary-hover': '#d1d5db', // bg-gray-300
        'bg-tertiary': '#fafafa', // bg-neutral-50
        'bg-disabled': '#f5f5f5', // bg-neutral-100
        'bg-disabled-emphasize': '#f3f4f6', // bg-gray-100
        'bg-brand-primary': '#4338ca', // bg-indigo-700
        'bg-brand-primary-emphasize': '#3730a3', // bg-indigo-800
        'bg-error': '#dc2626', // bg-red-600
        'bg-error-emphasize': '#b91c1c', // bg-red-700
        'bg-error-subtle': '#fef2f2', // bg-red-50
        'bg-success-subtle': '#f0fdf4', // bg-green-50
        'bg-brand-subtle': '#eef2ff', // bg-indigo-50
        'bg-neutral-subtle': '#f9fafb', // bg-gray-50
        'bg-warning-subtle': '#fffbeb', // bg-amber-50
        // Border colors
        'border-primary': '#e5e5e5', // border-neutral-200
        'border-secondary': '#9ca3af', // border-gray-400
        'border-success': '#bbf7d0', // border-green-200
        'border-brand-solid': '#4f46e5', // border-indigo-600
        'border-brand-subtle': '#c7d2fe', // border-indigo-200
        'border-error-subtle': '#fecaca', // border-red-200
        'border-warning-subtle': '#fde68a', // border-amber-200
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
 
    },
  },
  plugins: [],
};
export default config;
