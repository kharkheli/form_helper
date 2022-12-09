export type Option = {
    label: string,
    value: symbol | string | number,
}


export type Props = {
    options: Option[],
    width?: number,
    height?: number,
    placeholder?: string,
    onChange?: (value: symbol | string | number) => void,
}
