import { KeyboardTypeOptions, StyleProp, TouchableOpacityProps, ViewStyle } from "react-native"

export type IconType = {
    size?:number,
    color:string,
    type:string,
    name:string,
    min?:number
}
export interface TextAreaProps {
    attr: {
      icon: IconType;
      placeholder: string;
      keyboardType?: KeyboardTypeOptions;
      field: string;
      value?: string;
      color?:string;
      height?:any;
      multiline?:boolean;
      handleChange: (field: string, value: string) => any;
    };
}
export interface ButtonProps extends TouchableOpacityProps {
    btnInfo?: {
      styles?: StyleProp<ViewStyle>;
    };
    textInfo?: {
      text?: string;
      color?: string;
    };
    iconInfo: IconType;
    handleBtnClick: () => void;
    disabled?:boolean
}
export interface IconButtonProps {
  iconInfo: IconType;
  handleBtnClick: () => void;
}
export interface AddressButtonProps {
  handleBtnClick: (value:LocationType) => void;
  placeholder?:string;
}
export interface DateButtonProps {
  handleBtnClick: (value:string) => void;
  placeholder?:string;
  mode: 'date' | 'time'
}
export type LocationType = {
  latitude:number;
  longitude:number;
  text?:string;
  short_name?:string;
  long_name?:string
}
export type CountryDataType = {
  dialCode:string;
  name:string;
  flag:string;
}
export type ConfirmDialogType = {
  isVisible: boolean,
  text: string,
  okayBtn: string,
  cancelBtn: string,
  hasHideModal:boolean,
  isSuccess?: boolean,
  response?:any,
  severity?:boolean
}
export type LocationInputProps = {
  handleChange: (field: string, value: object) => void;
  field: string;
  placeHolder: string;
};
export interface Address {
  text: string;
  longitude:any;
  latitude:any
}
export interface Movie {
  id: any;
  title: string;
  poster: string;
  description: string;
  year: string;
  views?: string;
  rank: any;
  actors:string;
  mocked: true | false
}
export type MovieDB = {
  "#ACTORS": string;
  "#AKA": string;
  "#IMDB_ID": string;
  "#IMDB_IV"?: string;
  "#IMDB_URL": string;
  "#IMG_POSTER": string;
  "#RANK": number;
  "#TITLE": string;
  "#YEAR"?: number;
  "photo_height"?: number;
  "photo_width"?: number;
};
export interface MovieDetails {
  id?: string;
  title: string;
  description: string;
  poster: string;
  actors?: string[];
  reviews?: Review[];
  keywords?: string[];
}

export interface Review {
  author: string;
  content: string;
}