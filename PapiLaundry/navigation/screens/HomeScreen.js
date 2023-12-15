import { Text, View } from "react-native";
import { styles } from "../../styles/style";
import { Searchbar } from "../../components/Searchbar";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.bgContainer}>
            <Searchbar/>

        </View>
    )
}