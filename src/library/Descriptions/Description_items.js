import React from 'react'

const Description_items = (props) => {
    return (
        <>

            <div className='wg-descriptions'>
                <div className='wg-descriptions-view'>
                    <table>
                        <tbody>
                            <tr className='wg-descriptions-row'>
                                <td className='wg-descriptions-item'>
                                    <div className='wg-descriptions-item-container'>
                                        <span className='wg-descriptions-item-label'>{props.label}</span>
                                        <span className='wg-descriptions-item-content'>{props.children}</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default Description_items
