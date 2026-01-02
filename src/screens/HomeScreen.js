// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import { getSessions } from '../storage/sessionStorage';
// import SessionItem from '../components/SessionItem';

// export default function HomeScreen({ navigation }) {
//     const [sessions, setSessions] = useState([]);

//     useEffect(() => {
//         const unsubscribe = navigation.addListener('focus', loadSessions);
//         return unsubscribe;
//     }, [navigation]);

//     const loadSessions = async () => {
//         const data = await getSessions();
//         setSessions(data);
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>Fetal Movement Tracker</Text>

//             <FlatList
//                 data={sessions}
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => <SessionItem item={item} />}
//                 ListEmptyComponent={<Text>No records yet</Text>}
//             />

//             <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => navigation.navigate('Counter')}
//             >
//                 <Text style={styles.buttonText}>Start Counting</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: { flex: 1, padding: 16 },
//     header: { fontSize: 20, fontWeight: '700', marginBottom: 12 },
//     button: {
//         backgroundColor: '#6C63FF',
//         padding: 16,
//         borderRadius: 8,
//         marginTop: 12,
//     },
//     buttonText: { color: '#fff', textAlign: 'center', fontWeight: '600' },
// });
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
} from 'react-native';
import { getSessions } from '../storage/sessionStorage';
import SessionItem from '../components/SessionItem';

export default function HomeScreen({ navigation }) {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', loadSessions);
        return unsubscribe;
    }, [navigation]);

    const loadSessions = async () => {
        const data = await getSessions();
        setSessions(data);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>DFM (Kick counter)</Text>
                <View style={styles.iconWrap}>
                    <Text>👶</Text>
                    <Text style={styles.count}>0</Text>
                </View>
            </View>

            {/* Article Card */}
            <ImageBackground
                style={styles.card}
                imageStyle={{ borderRadius: 12 }}
                source={{ uri: 'https://via.placeholder.com/300x150' }}
            >
                <View style={styles.tag}>
                    <Text style={styles.tagText}>Leap Articles</Text>
                </View>
                <Text style={styles.cardTitle}>DFM (fetal movement)</Text>
            </ImageBackground>

            {/* CTA */}
            <TouchableOpacity
                style={styles.recordBtn}
                onPress={() => navigation.navigate('Counter')}
            >
                <Text style={styles.recordText}>Record fetal movement</Text>
            </TouchableOpacity>

            {/* Past Records */}
            <Text style={styles.section}>Past records</Text>
            <FlatList
                data={sessions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <SessionItem item={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    title: { fontSize: 18, fontWeight: '700' },
    iconWrap: { flexDirection: 'row', alignItems: 'center' },
    count: { marginLeft: 4 },
    card: {
        height: 150,
        padding: 12,
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    tag: {
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    tagText: { fontSize: 12 },
    cardTitle: { color: '#fff', fontWeight: '600' },
    recordBtn: {
        borderWidth: 1,
        borderRadius: 24,
        padding: 14,
        alignItems: 'center',
        marginBottom: 20,
    },
    recordText: { fontWeight: '500' },
    section: { fontWeight: '600', marginBottom: 8 },
});
