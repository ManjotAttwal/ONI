import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
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
            <Text style={styles.header}>Fetal Movement Tracker</Text>

            <FlatList
                data={sessions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <SessionItem item={item} />}
                ListEmptyComponent={<Text>No records yet</Text>}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Counter')}
            >
                <Text style={styles.buttonText}>Start Counting</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    header: { fontSize: 20, fontWeight: '700', marginBottom: 12 },
    button: {
        backgroundColor: '#6C63FF',
        padding: 16,
        borderRadius: 8,
        marginTop: 12,
    },
    buttonText: { color: '#fff', textAlign: 'center', fontWeight: '600' },
});
