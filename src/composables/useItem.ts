import { computed } from 'vue'
import type { ItemType } from 'src/types/items-types'

export function useItem(props: { item: ItemType }, emit: (event: 'update:item', item: ItemType) => void) {
  const item = computed<ItemType>({
    get() {
      return props.item
    },
    set(val: ItemType) {
      emit('update:item', val)
    },
  })

  return {
    item
  }
}
