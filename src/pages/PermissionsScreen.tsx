import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PermissionsContext } from '../context/PermissionsContext';
import { BlackButton } from '../components/BlackButton';

export const PermissionsScreen = () => {

    const { permissions, askLocationPermission } = useContext(PermissionsContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Es necesario el Uso del GPS para utilizar esta Aplicacion</Text>

            <BlackButton
                title="Permiso"
                onPress={askLocationPermission}
            />

            <Text style={{ marginTop: 50, fontWeight: 'bold', fontSize: 20 }}>
                {JSON.stringify(permissions, null, 5)}
            </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        width: 260,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
});
