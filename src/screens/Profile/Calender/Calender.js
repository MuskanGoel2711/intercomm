import React from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
LocaleConfig.locales['fr'] = {
  monthNames: [
    'January',
    'Féb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan.',
    'Feb.',
    'March',
    'April',
    'May',
    'June',
    'July.',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Sunday',
  ],
  dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'fr';
export default class Calender extends React.Component {
  render() {
    const {markedDates, onDayPress, selectedDate} = this.props;
    return (
      <Calendar
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          height: 340,
        }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#dd99ee',
        }}
        current={selectedDate || new Date().toISOString().split('T')[0]}
        onDayPress={day => {
          if (onDayPress) {
            onDayPress(day);
          }
        }}
        markedDates={markedDates}
      />
    );
  }
}
