export type Options = {
  label:string,
  value:any
}
export interface Attributes {
  outline?: boolean;
  outlined?: boolean;
  bordered?: boolean;
  dense?: boolean;
  color?: string;
  flat?: boolean;
  rounded?: boolean;
  round?: boolean;
  style?: CSSPropertyRule;
  class?: string | string[];
  labelColor?: string;
  mask?: string;
  rules?: ((val: any) => true | string)[];
  clearable?:boolean;
  val?:string;  
  label?: string;
  type: string;
  min?:number;
  max?:number;
  options?:Options[];
  spread?:boolean;
  name?:string
}

export interface ItemType {
  id: number | string;
  name: string;
  title: string;
  component: string;
  value?: any;
  draggable: boolean;
  attributes: Attributes;
  children?: ItemType[];
  icon?:string;
  date?:boolean;
  password?:boolean;
  group?:string;
  content?:string
}

export interface ItemProps {
  item: ItemType;
}

export interface ItemEmit {
  "update:item": (item: ItemType) => void;
}
