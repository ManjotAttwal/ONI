import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { formatTime } from '../utils/time';
import { saveSession } from '../storage/sessionStorage';
import InfoSheet from '../components/InfoSheet';

export default function CounterScreen({ navigation }) {
    const [seconds, setSeconds] = useState(0);
    const [infoVisible, setInfoVisible] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, []);

    const onSave = async () => {
        clearInterval(intervalRef.current);

        const session = {
            id: Date.now().toString(),
            date: new Date().toISOString(),
            durationMinutes: Math.ceil(seconds / 60),
        };

        await saveSession(session);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setInfoVisible(true)}>
                <Text style={styles.info}>i</Text>
            </TouchableOpacity>

            <Text style={styles.timer}>{formatTime(seconds)}</Text>

            <TouchableOpacity style={styles.save} onPress={onSave}>
                <Text style={styles.text}>Save Session</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.cancel}>Go Back Without Saving</Text>
            </TouchableOpacity>

            <InfoSheet visible={infoVisible} onClose={() => setInfoVisible(false)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    timer: { fontSize: 48, fontWeight: '700', marginVertical: 20 },
    save: {
        backgroundColor: '#6C63FF',
        padding: 16,
        borderRadius: 8,
        width: '80%',
        marginBottom: 12,
    },
    text: { color: '#fff', textAlign: 'center', fontWeight: '600' },
    cancel: { color: '#555' },
    info: { position: 'absolute', top: 40, right: 20, fontSize: 18 },
});
