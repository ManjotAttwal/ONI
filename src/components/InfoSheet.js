// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';
// // import Modal from 'react-native-modal';
// // import { INFO_POINTS } from '../constants/infoText';

// // export default function InfoSheet({ visible, onClose }) {
// //     return (
// //         <Modal
// //             isVisible={visible}
// //             onBackdropPress={onClose}
// //             style={styles.modal}
// //         >
// //             <View style={styles.container}>
// //                 <Text style={styles.title}>How to Track Movements</Text>
// //                 {INFO_POINTS.map((point, index) => (
// //                     <Text key={index} style={styles.point}>• {point}</Text>
// //                 ))}
// //             </View>
// //         </Modal>
// //     );
// // }

// // const styles = StyleSheet.create({
// //     modal: { justifyContent: 'flex-end', margin: 0 },
// //     container: {
// //         backgroundColor: '#fff',
// //         padding: 20,
// //         borderTopLeftRadius: 16,
// //         borderTopRightRadius: 16,
// //     },
// //     title: {
// //         fontSize: 16,
// //         fontWeight: '600',
// //         marginBottom: 12,
// //     },
// //     point: {
// //         fontSize: 14,
// //         marginBottom: 8,
// //     },
// // });
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Modal from 'react-native-modal';
// import { INFO_POINTS } from '../constants/infoText';

// export default function InfoSheet({ visible, onClose }) {
//     return (
//         <Modal
//             isVisible={visible}
//             onBackdropPress={onClose}
//             style={styles.modal}
//         >
//             <View style={styles.container}>
//                 <View style={styles.header}>
//                     <Text style={styles.title}>Steps to count fetal kicks</Text>
//                     <TouchableOpacity onPress={onClose}>
//                         <Text style={styles.close}>✕</Text>
//                     </TouchableOpacity>
//                 </View>

//                 {INFO_POINTS.map((point, index) => (
//                     <Text key={index} style={styles.point}>
//                         {index + 1}. {point}
//                     </Text>
//                 ))}
//             </View>
//         </Modal>
//     );
// }

// const styles = StyleSheet.create({
//     modal: { justifyContent: 'flex-end', margin: 0 },
//     container: {
//         backgroundColor: '#fff',
//         padding: 20,
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//     },
//     header: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginBottom: 12,
//     },
//     title: { fontSize: 16, fontWeight: '600' },
//     close: { fontSize: 18 },
//     point: { fontSize: 14, marginBottom: 10 },
// });
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import { INFO_POINTS } from '../constants/infoText';

export default function InfoSheet({ visible, onClose }) {
    return (
        <Modal
            isVisible={visible}
            onBackdropPress={onClose}
            style={styles.modal}
            backdropOpacity={0.4}
            useNativeDriver
        >
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.title}>Steps to count fetal kicks</Text>
                    <TouchableOpacity
                        onPress={onClose}
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    >
                        <Text style={styles.close}>✕</Text>
                    </TouchableOpacity>
                </View>

                {/* Divider */}
                <View style={styles.divider} />

                {/* Content */}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.content}
                >
                    {INFO_POINTS.map((point, index) => (
                        <View key={index} style={styles.pointRow}>
                            <View style={styles.numberCircle}>
                                <Text style={styles.number}>{index + 1}</Text>
                            </View>

                            <Text style={styles.pointText}>{point}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },

    container: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 24,
        maxHeight: '85%',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        fontSize: 16,
        fontWeight: '700',
        color: '#111',
    },

    close: {
        fontSize: 18,
        color: '#444',
    },

    divider: {
        height: 1,
        backgroundColor: '#EEE',
        marginVertical: 12,
    },

    content: {
        paddingBottom: 10,
    },

    pointRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 14,
    },

    numberCircle: {
        width: 22,
        height: 22,
        borderRadius: 11,
        backgroundColor: '#F2F4F7',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
        marginTop: 2,
    },

    number: {
        fontSize: 12,
        fontWeight: '600',
        color: '#333',
    },

    pointText: {
        flex: 1,
        fontSize: 14,
        lineHeight: 20,
        color: '#333',
    },
});
