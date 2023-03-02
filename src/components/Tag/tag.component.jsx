import * as React from 'react'
import * as styles from './tag.module.scss'

const Item = ({ contents, bgColor, color, bgColors }) => {
    let borderColors
    if (bgColor) {
        borderColors = {
            border: `2px solid ${bgColor}`
        }
    } else if (bgColors) {
        borderColors = {
            borderTop: `2px solid ${bgColors.top}`,
            borderRight: `2px solid ${bgColors.right}`,
            borderBottom: `2px solid ${bgColors.bottom}`,
            borderLeft: `2px solid ${bgColors.left}`,
        }
    } else {
        borderColors = {
            border: `2px solid white`
        }
    }
    const inlineStyles = {
        ...borderColors,
        flex: '1',
        maxWidth: '33%',
        padding: '4px 16px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',
        color: color || 'white',
        margin: '6px',
    }
    return (
        <span style={inlineStyles}>
            <span className={styles.center}>{contents}</span>
        </span>
    )
}

const Group = ({ items }) => {
    return (
        <span className={styles.groupContainer}>
            {
                items && items.map((item, index) => (
                    <Item
                        key={index}
                        contents={item.contents}
                        bgColor={item.bgColor}
                        color={item.color}
                        bgColors={item.bgColors}
                    />
                ))
            }
        </span>
    )
}

const Tag = {
    Group,
    Item,
}

export default Tag