import React from 'react';
import { DayStudyEventModel } from '../../models/TimetableModels';
import { Icon, IconType } from '../Icon/Icon';

const styles = require('./StudyEvent.module.css')

interface Props {
    event: DayStudyEventModel;
}

export class DayStudyEvent extends React.Component<Props> {
    render() {
        let event = this.props.event;
        let infoOutput : string[] = [event.TimeIntervalString, ...this.getEducatorsNames()]
        let {subject, iconType} = this.getSubjectAndIconType()

        return (
            <li className={styles.event}>
                <h3 className={styles.header}>{subject ?? event.Subject}</h3>
                {iconType != null &&
                <>
                    <span> </span>
                    <Icon iconType={iconType} />
                </>}
                <span className={styles.info}>{infoOutput.join(' • ')}</span>
            </li>
        );
    }

    getEducatorsNames() {
        let educatorsNamesAndPosts = this.props.event.EducatorIds.map(educator => educator.Item2);
        return educatorsNamesAndPosts
            .map(nameAndPost => nameAndPost.substr(0, nameAndPost.indexOf(',')))
    }

    getSubjectAndIconType() {
        let [subject, type] = this.props.event.Subject.split(',');
        switch (type.trim()) {
            case 'лекция':
                return {subject: subject, iconType: IconType.Lecture};

            case 'лабораторная работа':
                return {subject: subject, iconType: IconType.Lab};

            case 'семинар':
            case 'практическое занятие':
                return {subject: subject, iconType: IconType.Practice};

            default:
                return {subject: null, iconType: null};
        }
    }

}