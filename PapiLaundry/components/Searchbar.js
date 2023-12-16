import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/style";
import { Ionicons } from '@expo/vector-icons';


export const Searchbar = ({ navigation, route }) => {
    return (
        <View>
            <View>
                <Text style={styles.greetingsTextH1}>
                    Hi Ikan,
                </Text>
                <Text style={styles.greetingsTextH2}>
                    Where do you want to do laundry today?
                </Text>
            </View>

            <TouchableOpacity style={styles.searchContainer} onPress={() => navigation.navigate("SearchScreen")}>
                <View style={styles.searchBar}>
                    <Ionicons name="search" style={styles.searchBarLogo} />
                    <Text style={styles.searchBarText}>
                        Search Laundry here...
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
