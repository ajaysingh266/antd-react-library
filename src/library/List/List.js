import { React } from 'react'

const List = (props) => {

    return (
        <>
            <div className={[props.size === 'large' ? " wg-list-sizelarge " :
                props.size == 'small' ? " wg-list-sizesmall " : "  "] +
                [props.bordered ? "  wg-list-border  " : "  "]
                + [props.itemLayout === "vertical" ? " wg-list-vertical" : " "]}
            >
                {props.header}
                {props.loading}
                {props.dataSource.map(props.renderItem)}
                {props.footer}
                {props.loadMore}

            </div>
        </>
    )
}

export default List
