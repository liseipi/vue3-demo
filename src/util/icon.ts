import { createVNode } from 'vue'
import * as antIcons from '@ant-design/icons-vue'

const MyIcon = (props: { key: string }) => {
  // @ts-ignore
  const { icon } = props
  // @ts-ignore
  return createVNode(antIcons[icon])
}

export default MyIcon