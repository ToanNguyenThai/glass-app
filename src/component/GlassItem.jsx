import React, { Component } from 'react'

export default class GlassItem extends Component {
    render() {
        const { data, getGlass } = this.props;
        return (
            <div className='glass__container'>
                {
                    data.map((item, key) => (
                        <div onClick={() => getGlass(item)} className='glass__item' key={key}>
                            <img src={item.url} ></img>
                        </div>

                    ))
                }
            </div>
        )
    }
}
