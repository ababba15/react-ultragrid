import React, { Component } from 'react'
import { css } from 'glamor'
import typeOf from './typeOf'

class GridWrapper extends Component {
    _calculateColumns() {
        const {cols} = this.props;
        let result = '';

        if (typeOf(cols) === 'number') {
            for (let i = 1; i <= cols; i++) {
                result += '1fr '
            }
        }

        if (typeOf(cols) === 'array') {
            for (let i = 0; i < cols.length; i++) {
                if (typeOf(cols[i]) === 'number') {
                    result += `${cols[i]}fr `
                }
                if (typeOf(cols[i]) === 'string') {
                    result += `${cols[i]} `
                }
            }
        }

        return result
    }

    render() {
        const grid = css({
            display: "grid",
            gridAutoColumns: "100px",
            gridTemplateColumns: this._calculateColumns(),
            gridGap: `${this.props.gap}px` || '0px',
            // gridAutoRows: "minmax(150px, auto)",
        })
        return (
            <div className={`${grid}`}>
                {this.props.children}
            </div>
        )
    }
}

export default class App extends Component {
    render() {
        const item = css({
            // border: 'solid 10px #6DBFFF',
            padding: '10px',
        })
        return (
            <GridWrapper cols={['350px', 1, 1]} gap={1}>
                <div className={`${item}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem earum eius et, velit. Magnam a doloribus esse nostrum id deserunt
                    possimus odit perferendis officia, dolorum praesentium, fugit sunt, consectetur atque.
                </div>
                <div className={`${item}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id repellat laboriosam autem temporibus optio mollitia deleniti
                    iusto, odio reiciendis necessitatibus facere dolor dolorum, neque quia obcaecati velit maiores blanditiis ipsa.
                </div>
                <div className={`${item}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod laborum neque, quisquam, dicta ad pariatur sint vero corporis
                    iste! Earum iste vero omnis ratione accusantium sapiente deserunt, corporis voluptatem doloremque!
                </div>
            </GridWrapper>
        )
    }
}