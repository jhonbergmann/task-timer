export const STATUS_COLORS = {
  amber: 'amber-500',
  stone: 'stone-500',
  red: 'red-500',
} as const

export interface IStatusProps {
  statusColor: keyof typeof STATUS_COLORS
}
