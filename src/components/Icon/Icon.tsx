import React from 'react';
import { Hint } from "@skbkontur/react-ui";

const styles = require('./Icon.module.css');

export enum IconType {
    'Lecture' = 1,
    'Practice',
    'Lab'
}

const iconTitle = {
    [IconType.Lecture]: 'Лекция',
    [IconType.Practice]: 'Практика',
    [IconType.Lab]: 'Лаба'
};

export class Icon extends React.Component<{ iconType: IconType }> {
    render() {
        let type = this.props.iconType;
        return (
            <Hint pos={'top center'} text={iconTitle[type]}>
                <img className={styles.image} src={`./images/${IconType[type]}.png`} alt=''/>
            </Hint>
        );
    }
}
