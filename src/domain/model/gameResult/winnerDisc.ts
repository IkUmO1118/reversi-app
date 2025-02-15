import { DomainError } from "../../error/DomainError";

export const WinnerDisc = {
  Draw: 0,
  Dark: 1,
  Light: 2,
} as const;

export type winnerDisc = (typeof WinnerDisc)[keyof typeof WinnerDisc];

export function toWinnerDisc(value: any): winnerDisc {
  if(!Object.values(WinnerDisc).includes(value)) {
    throw new DomainError('InvalidWinnerDiscValue', 'Invalid winner disc value')
  }

  return value as winnerDisc
}