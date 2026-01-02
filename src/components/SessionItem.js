// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import dayjs from 'dayjs';

// export default function SessionItem({ item }) {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.date}>
//                 {dayjs(item.date).format('DD MMM YYYY, hh:mm A')}
//             </Text>
//             <Text style={styles.time}>
//                 {item.durationMinutes} minutes
//             </Text>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 16,
//         borderBottomWidth: 1,
//         borderColor: '#eee',
//     },
//     date: {
//         fontSize: 14,
//         fontWeight: '500',
//     },
//     time: {
//         marginTop: 4,
//         color: '#555',
//     },
// });
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import dayjs from 'dayjs';

export default function SessionItem({ item }) {
    return (
        <View style={styles.row}>
            <Text style={styles.date}>
                {dayjs(item.date).format('dddd · DD MMM YYYY')}
            </Text>
            <Text style={styles.time}>
                {item.durationMinutes} mins
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    date: { fontSize: 14 },
    time: { fontSize: 14, fontWeight: '500' },
});
