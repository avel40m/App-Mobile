import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./LocationDetails.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../utils/Theme";
import MapView, {Marker} from 'react-native-maps';

export const LocationDetailsScreen = ({ route }) => {
    const { item } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
                    {
                        item.images.map((image, index) => (
                            <Image key={index} source={image} style={styles.image} resizeMode="cover" />
                        ))
                    }
                </ScrollView>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={20} color={COLORS.primary} />
                    <Text style={styles.rating}>{item.rating}</Text>
                </View>
                <Text style={styles.description}>{item.description}</Text>
            </View>
            <MapView
            style={styles.map}
            initialRegion={{
                latitude: item.locationCoordinates.latitude,
                longitude: item.locationCoordinates.longitude,
                latitudeDelta: 0.2,
                longitudeDelta: 0.2
            }}
            >
                <Marker
                coordinate={{
                    latitude: item.locationCoordinates.latitude,
                    longitude: item.locationCoordinates.longitude,
                }}
                title={item.title}
                />
            </MapView>
        </ScrollView>
    )
}