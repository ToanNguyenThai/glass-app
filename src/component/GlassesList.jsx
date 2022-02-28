import React, { Component } from 'react'
import GlassItem from './GlassItem'
export default class GlassesList extends Component {
    state = {
        glass: ''
    }
    getGlass = (choose_glass) => {
        console.log(this.state.glass.length);
        this.setState({
            glass: choose_glass
        })
        console.log(choose_glass);
    }
    render() {

        const { data } = this.props;
        return (
            <div className='container'>
                {this.state.glass.length === 0 ?
                    <div className='model__container'>
                        <img className='model' src='./glassesImage/model.jpg'></img>
                    </div>
                    :
                    <div className='model__container'>
                        <img className='model' src='./glassesImage/model.jpg'></img>
                        <img src={this.state.glass.url} className='model__glass'></img>
                        <div className='glass__description'>
                            <h3>{this.state.glass.name}</h3>
                            <p>{this.state.glass.desc}</p>
                        </div>
                    </div>

                }

                <GlassItem data={data} getGlass={this.getGlass}></GlassItem>

            </div>
        )
    }
}
