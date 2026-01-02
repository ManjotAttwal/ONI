// import React, { useEffect, useRef, useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { formatTime } from '../utils/time';
// import { saveSession } from '../storage/sessionStorage';
// import InfoSheet from '../components/InfoSheet';

// export default function CounterScreen({ navigation }) {
//     const [seconds, setSeconds] = useState(0);
//     const [infoVisible, setInfoVisible] = useState(false);
//     const intervalRef = useRef(null);

//     useEffect(() => {
//         intervalRef.current = setInterval(() => {
//             setSeconds(s => s + 1);
//         }, 1000);

//         return () => clearInterval(intervalRef.current);
//     }, []);

//     const onSave = async () => {
//         clearInterval(intervalRef.current);

//         const session = {
//             id: Date.now().toString(),
//             date: new Date().toISOString(),
//             durationMinutes: Math.ceil(seconds / 60),
//         };

//         await saveSession(session);
//         navigation.goBack();
//     };

//     return (
//         <View style={styles.container}>
//             <TouchableOpacity onPress={() => setInfoVisible(true)}>
//                 <Text style={styles.info}>i</Text>
//             </TouchableOpacity>

//             <Text style={styles.timer}>{formatTime(seconds)}</Text>

//             <TouchableOpacity style={styles.save} onPress={onSave}>
//                 <Text style={styles.text}>Save Session</Text>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() => navigation.goBack()}>
//                 <Text style={styles.cancel}>Go Back Without Saving</Text>
//             </TouchableOpacity>

//             <InfoSheet visible={infoVisible} onClose={() => setInfoVisible(false)} />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//     timer: { fontSize: 48, fontWeight: '700', marginVertical: 20 },
//     save: {
//         backgroundColor: '#6C63FF',
//         padding: 16,
//         borderRadius: 8,
//         width: '80%',
//         marginBottom: 12,
//     },
//     text: { color: '#fff', textAlign: 'center', fontWeight: '600' },
//     cancel: { color: '#555' },
//     info: { position: 'absolute', top: 40, right: 20, fontSize: 18 },
// });
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { formatTime } from '../utils/time';
import { saveSession } from '../storage/sessionStorage';
import InfoSheet from '../components/InfoSheet';

export default function CounterScreen({ navigation }) {
    const [seconds, setSeconds] = useState(0);
    const [stopped, setStopped] = useState(false);
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
        setStopped(true);

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
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Record DFM</Text>
                <TouchableOpacity onPress={() => setInfoVisible(true)}>
                    <Text>ⓘ</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.helper}>Stop recording after{"\n"}10 kicks</Text>

            <View style={styles.timerBox}>
                <Text style={styles.timer}>{formatTime(seconds)}</Text>
            </View>

            <Text style={styles.icon}>{stopped ? '▶' : '■'}</Text>

            <TouchableOpacity style={styles.saveBtn} onPress={onSave}>
                <Text>Save</Text>
            </TouchableOpacity>

            <Text style={styles.help}>
                What if I am not getting{"\n"}
                <Text style={styles.underline}>enough kicks?</Text>
            </Text>

            <InfoSheet visible={infoVisible} onClose={() => setInfoVisible(false)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: { fontWeight: '600' },
    helper: { textAlign: 'center', marginTop: 40 },
    timerBox: {
        alignSelf: 'center',
        marginVertical: 40,
    },
    timer: { fontSize: 40, color: '#FF5A5A', fontWeight: '700' },
    icon: { textAlign: 'center', fontSize: 24, marginBottom: 20 },
    saveBtn: {
        borderWidth: 1,
        borderRadius: 24,
        padding: 14,
        alignItems: 'center',
    },
    help: { textAlign: 'center', marginTop: 20 },
    underline: { textDecorationLine: 'underline' },
});
