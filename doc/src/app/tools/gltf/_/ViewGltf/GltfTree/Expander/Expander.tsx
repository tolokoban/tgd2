import * as React from "react"

import {
    Theme,
    CommonProps,
    styleCommon,
    Icon,
    IconMinusO,
    IconPlusO,
    IconBook,
    IconBullet,
} from "@tolokoban/ui"

import styles from "./Expander.module.css"

const $ = Theme.classNames

export type ViewExpanderProps = CommonProps & {
    name?: string
    icon?: Icon
    title: React.ReactNode
    style?: React.CSSProperties
    onClick?(): void
    children?: React.ReactNode
}

export function Expander(props: ViewExpanderProps): JSX.Element {
    const [open, setOpen] = React.useState(false)
    const style: React.CSSProperties = {
        ...styleCommon(props),
        ...props.style,
    }
    const handleToggle = (event: React.MouseEvent<HTMLDetailsElement>) => {
        event.preventDefault()
        event.stopPropagation()
        setOpen(!open)
        props.onClick?.()
    }
    const Icon = props.icon
    return (
        <details
            className={$.join(props.className, styles.expander)}
            style={style}
            onToggle={handleToggle}
            onClick={
                props.children
                    ? undefined
                    : event => {
                          event.preventDefault()
                          event.stopPropagation()
                          props.onClick?.()
                      }
            }
            name={props.name}
        >
            <summary>
                <div className={styles.handle}>
                    {props.children ? (
                        open ? (
                            <IconMinusO size="1em" />
                        ) : (
                            <IconPlusO size="1em" />
                        )
                    ) : (
                        <IconBullet size="1em" />
                    )}
                </div>
                {Icon && <Icon color="primary-7" />}
                <span>{props.title}</span>
            </summary>
            <div>{props.children}</div>
        </details>
    )
}
