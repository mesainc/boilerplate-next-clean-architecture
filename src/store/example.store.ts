import create from 'zustand'
import type { IHookUseExample } from '@typings/store/example'

export default create<IHookUseExample>((set) => ({
  example: 'Example',
  setExample: (example) => set({ example }),
  clearExample: () => set({ example: '' }),
}))
