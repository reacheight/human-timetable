import React from "react";
import { DatePicker, FLAT_THEME, Gapped, Select, ThemeProvider } from "@skbkontur/react-ui";

const styles = require('./Header.module.css')

interface Props {
    groupNumber: string;
    groups: string[];
    onChangeGroup: (_ : any) => void;
    date: string;
    onChangeDate: (_ : any) => void;
}

export class Header extends React.Component<Props> {
    render() {
        const { groupNumber, groups, onChangeGroup, date, onChangeDate } = this.props;

        if (groupNumber) {
            return (
                <header className={styles.wrapper}>
                    <ThemeProvider value={FLAT_THEME}>
                        <Gapped gap={10}>
                            <Select
                                size={'large'}
                                items={groups}
                                value={groupNumber}
                                onValueChange={(value : any) => onChangeGroup(value)}
                            />
                            <DatePicker
                                size={'large'}
                                width={130}
                                value={date}
                                onValueChange={(value: any) => onChangeDate(value)}
                            />
                        </Gapped>
                    </ThemeProvider>
                </header>
            )
        }
    }
}